<?php
/**
 * Valjean Page
 *
 * @author LLLgoyour
 */
if (!defined('__TYPECHO_ROOT_DIR__')) exit;
if (@_SERVER['HTTP_X_PJAX'] == true) {
    header('HTTP/1.1 200 OK');
    echo '<title>' . Valjean_Header::title($this, '', ' - ', true, false) . '</title>';
    echo ' '
} else {
    $this->need('lib/header.php');
}
Typecho_widget::widget('Widget_Security')->to($security);
?>
<div class=""<!----还需要写类-->