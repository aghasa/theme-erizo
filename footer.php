<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package erizo
 */

?>

</div><!-- #page -->
	<footer id="colophon" class="site-footer">
		<div class="site-info">
		<nav id="site-navigation" class="footer-navigation">
			<?php
			wp_nav_menu(
				array(
					'theme_location' => 'menu-footer',
					'menu_class'        => 'footer-menu',
					'depth' => 1,
				)
			);
			?>
		</nav><!-- #site-navigation -->
		</div><!-- .site-info -->
	</footer><!-- #colophon -->

<?php wp_footer(); ?>

</body>
</html>
