<?php

class Cream_Magazine_Author_Widget extends WP_Widget {
 
    function __construct() { 

        parent::__construct(
            'cream-magazine-author-widget',  // Base ID
            esc_html__( 'CM: Author Widget', 'cream-magazine' ),   // Name
            array(
                'description' => esc_html__( 'Displays Brief Author Description.', 'cream-magazine' ), 
            )
        );
 
    }
 
    public function widget( $args, $instance ) {

        $title = apply_filters( 'widget_title', empty( $instance['title'] ) ? '' : $instance['title'], $instance, $this->id_base );
            
        $author_page = !empty( $instance['author_page'] ) ? $instance['author_page'] : ''; 

        $author_link_title = !empty( $instance['author_link_title'] ) ? $instance['author_link_title'] : ''; 

        echo $args[ 'before_widget' ];

            $author_args = array(
                'post_type' => 'page',
                'posts_per_page' => 1,
            ); 

            if( $author_page > 0 ) {
                $author_args['page_id'] = absint( $author_page );
            }

            $author = new WP_Query( $author_args );

            if( $author->have_posts() ) :
                if( !empty( $title ) ) {
                    echo $args['before_title'];
                    echo esc_html( $title );
                    echo $args['after_title'];
                }
                while( $author->have_posts() ) : $author->the_post();
                    ?>
                    <div class="cm_author_widget">
                        <?php
                        $thumbnail_url = '';
                        if( has_post_thumbnail() ) {
                            $thumbnail_url = get_the_post_thumbnail_url( get_the_ID(), 'cream-magazine-thumbnail-3' );
                        }
                        if( !empty(  $thumbnail_url)  ) {
                            ?>
                            <div class="author_thumb imghover lazy-thumb lazyloading">
                                <img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="<?php echo esc_url( $thumbnail_url ); ?>" data-srcset="<?php echo esc_url( $thumbnail_url ); ?>" alt="<?php cream_magazine_thumbnail_alt_text( get_the_ID() ); ?>">
                                <noscript>
                                    <img src="<?php echo esc_url( $thumbnail_url ); ?>" srcset="<?php echo esc_url( $thumbnail_url ); ?>" class="image-fallback" alt="<?php cream_magazine_thumbnail_alt_text( get_the_ID() ); ?>">
                                </noscript>
                            </div><!-- .author_thumb -->
                            <?php
                        }
                        ?>
                        <div class="author_name">
                            <h4><?php the_title(); ?></h4>
                        </div><!-- .author_name -->
                        <div class="author_desc">
                            <?php the_excerpt(); ?>
                        </div><!-- .author_desc -->
                        <?php 
                        if( !empty( $author_link_title ) ) { 
                            ?>
                            <div class="author-detail-link">
                                <a href="<?php the_permalink(); ?>"><?php echo esc_html( $author_link_title ); ?></a>
                            </div>
                            <?php
                            }
                        ?>
                    </div><!-- .cm_author_widget -->
                    <?php
                endwhile;
                wp_reset_postdata();                
            endif;
        echo $args[ 'after_widget' ]; 
 
    }
 
    public function form( $instance ) {
        $defaults = array(
            'title' => '',
            'author_page' => '',
            'author_link_title' => '',
        );

        $instance = wp_parse_args( (array) $instance, $defaults );

        ?>
        <p>
            <label for="<?php echo esc_attr( $this->get_field_name('title') ); ?>">
                <strong><?php esc_html_e('Title', 'cream-magazine'); ?></strong>
            </label>
            <input class="widefat" id="<?php echo esc_attr( $this->get_field_id('title') ); ?>" name="<?php echo esc_attr( $this->get_field_name('title') ); ?>" type="text" value="<?php echo esc_attr( $instance['title'] ); ?>" />   
        </p>

        <p>
            <label for="<?php echo esc_attr( $this->get_field_id( 'author_page' ) )?>"><strong><?php echo esc_html__( 'Author Page', 'cream-magazine' ); ?></strong></label>
            <?php
                wp_dropdown_pages( array(
                    'id'               => esc_attr( $this->get_field_id( 'author_page' ) ),
                    'class'            => 'widefat',
                    'name'             => esc_attr( $this->get_field_name( 'author_page' ) ),
                    'selected'         => esc_attr( $instance[ 'author_page' ] ),
                    'show_option_none' => esc_html__( '&mdash; Select Page &mdash;', 'cream-magazine' ),
                    )
                );
            ?>
        </p>

        <p>
            <label for="<?php echo esc_attr( $this->get_field_name('author_link_title') ); ?>">
                <strong><?php esc_html_e('Author Link Title', 'cream-magazine'); ?></strong>
            </label>
            <input class="widefat" id="<?php echo esc_attr( $this->get_field_id('author_link_title') ); ?>" name="<?php echo esc_attr( $this->get_field_name('author_link_title') ); ?>" type="text" value="<?php echo esc_attr( $instance['author_link_title'] ); ?>" />   
        </p>
        <?php 
    }
 
    public function update( $new_instance, $old_instance ) {
 
        $instance = $old_instance;

        $instance['title']              = sanitize_text_field( $new_instance['title'] );

        $instance['author_page']        = absint( $new_instance['author_page'] );

        $instance['author_link_title']  = sanitize_text_field( $new_instance['author_link_title'] );

        return $instance;
    } 
}