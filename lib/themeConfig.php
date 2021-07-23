<?php
/**
 * Valjean Theme Configuration
 * @author LLLgoyour 
 */

if (!defined('__TYPECHO_ROOT_DIR__')) exit;

//引用设置组件 import setting plugins
Valjean::requireFile(__DIR__ . '/initLib/', 'php');

function themeConfig($form) {
    themeBackUp();
    $
}

//语言 language
$GLOBALS['valjeanLang'] = 'zh-cn'; //可调整语言文件，根据语言包的文件名填写

//字体 font
//主题CDN字体 theme CDN font
$GLOBALS['valjeanFontCDN'] = array(
    'if' => 'on', //选择是否开启字体CDN（思源宋体或黑体）
    'cdn' => 'google_font' //默认选用Google Font。可直接输入字体的CDN url。
);

//文章缩略图
$GLOBALS['valjean']

//是否压缩 HTML 源代码
$GLOBALS['valjeanIfCompressHTML'] = 'off';