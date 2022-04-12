/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

const Save = ( props ) => {
	const {
		attributes: { title, mediaURL, description },
	} = props;

	const blockProps = useBlockProps.save();
	return (
		<div { ...blockProps }>
			<RichText.Content tagName="h2" value={ title } />

			{ mediaURL && (
				<img
					className="recipe-image"
					src={ mediaURL }
					alt={ __( 'Recipe Image', 'gutenberg-examples' ) }
				/>
			) }
			
			<h3>{ __( 'Description', 'gutenberg-examples' ) }</h3>
			<RichText.Content
				tagName="div"
				className="steps"
				value={ description }
			/>
		</div>
	);
};
export default Save;
/*export default function save() {
	return (
		<div { ...useBlockProps.save() }>
			<div className="hero container">
				<div className="content-inner">
					<div className="content">
						<h2>Test Danny</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						<div className="btn-group relative">
							<div className="btn-primary">
								<a className="btn-text" href="#">TRY AGAIN</a>
							</div>
							<div className="btn-primary">
								<a className="btn-text" href="#">CONTINUE</a>
							</div>
						</div>
					</div>
					<div className="featured">
						<img className="featured-image" alt="" title="" src="https://source.unsplash.com/KQVX1_pYpsA/1600x900"/>
					</div>
				</div>
			</div>
		</div>
	);
}*/
