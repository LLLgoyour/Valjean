<?php
/**
 * Valjean Functions
 */
if (!defined('__TYPECHO_ROOT_DIR')) exit;

//声明版本号 announce version
define("VALJEAN_VERSION", "0.0.0.1");

//设置时区 set time zone 
date_default_timezone_set("Asia_Shanghai");

//引用库文件 import library files
require_once("lib/lib.php")

if (!defined('__TYPECHO'))