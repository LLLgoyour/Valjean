<?php
/**
 * Valjean Language File
 * ZH-CN, ZH-TW, EN-US
 * @author LLLgoyour
 */

if (!defined('__TYPECHO_ROOT_DIR__')) exit;

class ValjeanLang {
    /*
     * 设置面板语言配置列表 Set language list in the dashboard
     */

    public static function getList() {
    //获取所有语言配置 get all language settings
        $langList = glob(Helper::options()->themeFile(Valjean_Lib::getTheme(), "lang/*.php"));

}
}

//获取对应语言文本
function get($a, $b) {
    return $GLOBALS[$a][$b];
}
function getecho($a, $b) {
    echo $GLOBALS[$a][$b];
}

//获取有参数的文本
function geta($a, $b, $c) {
    $content = str_replace('%s', $c, $GLOBALS[$a][$b]);
    return $content;
}
function getaecho($a, $b, $c) {
    $content = str_replace('%s', $c, $GLOBALS[$a][$b]);
    echo $content;
}