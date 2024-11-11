<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package erizo
 */
?>

<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'erizo' ); ?></a>

    <header id="masthead" class="site-header">
        <div class="header-container">
            <!-- Imagen del logo o imagen personalizada -->
            <div class="header-logo">
                <?php 
                // Aquí puedes usar la imagen de tu elección
                if ( has_custom_logo() ) {
                    the_custom_logo();
                } else {
                    echo '<img src="' . esc_url( get_template_directory_uri() . '/images/logo.png' ) . '" alt="' . get_bloginfo( 'name' ) . '">';
                }
                ?>
            </div>

            <!-- Menú -->
            <div class="header-menu">
                <?php
                wp_nav_menu( array(
                    'theme_location' => 'menu-1',
                    'menu_class'      => 'menu-list',
                    'container'       => false,
                ) );
                ?>
            </div>
        </div>
    </header><!-- #masthead -->
</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>
