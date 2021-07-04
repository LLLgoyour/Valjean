<?php
<<<<<<< Updated upstream
/**
 * Valjean Language File
 * Author: LLLgoyour. All rights reserved.
 */

if (!defined('__TYPECHO_ROOT_DIR__')) exit;

class Valjean_Lang {
    /*
     * 设置面板语言配置列表 Language list in dashboard
     * 
     * 
     */

public static function getList() {
    //获取所有语言配置 get all language settings
    $langList = glob(Helper::options()->themeFile(Valjean_Lib::getTheme()))
}
=======
if (!defined('__TYPECHO_ROOT_DIR__')) exit;

/**
 * Valjean Language Setting
 * Including languages of Zh-CN, Zh-TW, En-US.
 * 
 * Author: LLLgoyour. All rights reserved.
 */

class Language {
    public static function getLang() {
        require_once("")
    }
>>>>>>> Stashed changes
}