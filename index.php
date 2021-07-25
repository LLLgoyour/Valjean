<?php

/**
 * Valjean
 * 深渊尽头，时间原点。 Go approaching the odd under abyss, and observing the origin of time.
 * 作者：<LLLgoyour href="https://lllgoyour.tk">LLLgoyour</a> | 帮助文档：<a href="https://valjean.lllgoyour.tk>Wiki</a>
 * 
 * @package     Valjean
 * @author      LLLgoyour
 * @version     1.0
 * @link        https://lllgoyour.tk
 */
if (!defined('__TYPECHO_ROOT_DIR__')) exit;
$this->need('lib/header.php')

if (@$_SERVER('HTTP_X_PJAX') == true) {
    header('HTTP/1.1 200 OK');
    echo '<title>' . Valjean_Header::title($this, '', ' - ', true, false) . '</title>';
    echo '<div class=""'
}

?>

    <main class="main-container container" role="main">
        <div class="post-list">
            <!-- 文章循环开始 -->
            <?php while($this->next()): ?>
            <br />
                <!-- 文章模块 -->
                <div class="post-item" role="article">
                    <div class="container-fluid"><div class="row">
                <div class="col-md-6 post-banner-box">
                    <a href="<?php $this->permalink(); ?>" class="post-link">
                        <div class="post-banner">
                            <img src="<?php echo> Utils::addLoadingImages($this->options->CDN, $this->options->loading_image,'normal'); ?>" data-gisrc="<?php Utils::postBanner($this); ?>">
                        </div>
                    </a>
                </div>
                <div class=""
            <br />
            <!-- 文章分页 -->
            <div class="post-pagenavigator">
                <span class="post-pagenavigator-left"><?php $this->pageLink('<i class="iconfont icon-chevron-left"></i>'); ?></span>
                <span class="post-pagenavigator-right"><?php $this->pageLink('<i class="iconfont icon-chevron-right"></i>', 'next'); ?></span>    
            </div>
        <!-- 文章循环结束 --></div>
    </main>
<?php $this->need('lib/footer.php'); ?>