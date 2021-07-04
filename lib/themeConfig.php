<?php
/**
 * Valjean Theme Configuration
 * @author LLLgoyour 
 */

if (!defined('__TYPECHO_ROOT_DIR__')) exit;

//引用设置组件 import setting plugins

//语言 language
$GLOBALS['valjeanLang'] = 'zh-cn';

//字体 font
//主题CDN字体 theme CDN font
$GLOBALS['valjeanFontCDN'] = array(
    'if' => 'on', //选择是否开启字体CDN（思源宋体或黑体）
    'cdn' => 'google_font' //默认选用Google Font。可直接输入font CDN url。
);

//文章缩略图
$GLOBALS['valjean']