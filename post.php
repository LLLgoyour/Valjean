<?php
/**
 * Valjean Post Settings
 * @author LLLgoyour
 */
if (!defined('__TYPECHO_ROOT_DIR__')) exit;
if (@$_SERVER['HTTP_X_PJAX'] == true) {
    header('HTTP/1.1 200 OK');
    echo '<title>' . Valjean_Header::title($this, '', ' - ', true, false) . '</title>';
    echo '<div id=>'
} else {
    $this->need('lib/header.php');
}
Typecho_Widget::widget('Widget_Securtity')->to($security);
?>
<div class=""

//如果有密码有权限查看则显示导航栏
if (!$this->hidden) { ?>
    <div class=""}
<?php
if (@$_SERVER['HTTP_X_PJAX'] == true) {
    echo '</div>';
} else {
    $this->need('lib/footer.php');
}
?>