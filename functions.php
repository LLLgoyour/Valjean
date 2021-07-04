<?php
/**
 * Valjean Functions File
 * @author LLLgoyour
 */
if (!defined('__TYPECHO_ROOT_DIR')) exit;

//引用所有所需文件 import all files needed
Valjean_Lib::requireFile(__DIR__ . '/lib/', 'php');
require_once __DIR__ . '/lib/lib.php';
//引用语言文件 import language files
require_once("lang/".$GLOBALS['valjeanLang'].".php");

//从index.php获取版本号 get version from index.php
function themeVersion() {
    $info = Typecho_Plugin::parseInfo(__DIR__ . '/index.php');
    return $info['version'];
}

//判断PHP版本号 
if (substr(PHP_VERSION, 0, 3) < '7.0') {
    echo '<h3>PHP版本必须升级到7.0。</h3>';
    die();
}

//设置时区 set time zone 
date_default_timezone_set("Asia_Shanghai");

//在编辑界面添加按钮
Typecho_Plugin::factory('admin/write-post.php')->bottom = array('Valjean_Lib', 'addButtons');
Typecho_Plugin::factory('admin/write-page.php')->bottom = array('Valjean_Lib', 'addButtons');
//解析内容
Typecho_Plugin::factory('Widget_Abstract_Contents')->markdown = array('Valjean_Contents', 'markdown');
Typecho_Plugin::factory('Widget_Abstract_Contents')->contentEx = array('Valjean_Contents', 'contentEx');

function themeInit() {

}

function themeLayout() {

}