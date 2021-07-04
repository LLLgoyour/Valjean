<?php
/**
 * Valjean Functions File.
 * Author: LLLgoyour. All rights reserved.
 */
if (!defined('__TYPECHO_ROOT_DIR')) exit;

//引用所有所需文件 import all files needed
require_once("themeConfig.php");
require_once("lib/language.php");
require_once("lib/lib.php");
require_once("");
//引用语言文件 import language files
require_once("lang/".$GLOBALS['valjeanLang'].".php");

//从index.php获取版本号 get version from index.php
function themeVersion() {
    $info = Typecho_Plugin::parseInfo(__DIR__ . '/index.php');
    return $info['version'];
}

//判断PHP版本号 

//设置时区 set time zone 
date_default_timezone_set("Asia_Shanghai");

if (!defined('__TYPECHO'))