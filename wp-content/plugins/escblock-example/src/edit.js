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
import { RichText, MediaUpload, useBlockProps } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css

import './editor.scss';
 */
 
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

const Edit = ( props ) => {
	const {
		attributes: { title, mediaID, mediaURL, description },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onChangeTitle = ( value ) => {
		setAttributes( { title: value } );
	};

	const onSelectImage = ( media ) => {
		setAttributes( {
			mediaURL: media.url,
			mediaID: media.id,
		} );
	};

	const onChangeDescription = ( value ) => {
		setAttributes( { description: value } );
	};

	return (
		<div { ...blockProps }>
			<RichText
				tagName="h2"
				placeholder={ __(
					'Write Article Title…',
					'gutenberg-examples'
				) }
				value={ title }
				onChange={ onChangeTitle }
			/>
			<div className="recipe-image">
				<MediaUpload
					onSelect={ onSelectImage }
					allowedTypes="image"
					value={ mediaID }
					render={ ( { open } ) => (
						<Button
							className={
								mediaID ? 'image-button' : 'button button-large'
							}
							onClick={ open }
						>
							{ ! mediaID ? (
								__( 'Upload Image', 'gutenberg-examples' )
							) : (
								<img
									src={ mediaURL }
									alt={ __(
										'Upload Recipe Image',
										'gutenberg-examples'
									) }
								/>
							) }
						</Button>
					) }
				/>
			</div>
			<h3>{ __( 'Description', 'gutenberg-examples' ) }</h3>
			<RichText
				tagName="div"
				multiline="p"
				className="steps"
				placeholder={ __(
					'Write the description…',
					'gutenberg-examples'
				) }
				value={ description }
				onChange={ onChangeDescription }
			/>
		</div>
	);
};
export default Edit;
/*export default function Edit() {
	return (
		<div { ...useBlockProps() }>
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
