import Box from './Box'

function Grid() {
	return (
		<div className="grid grid-rows-3 grid-cols-3 gap-3">
			<Box id={0}/>
			<Box id={1}/>
			<Box id={2}/>
			<Box id={3}/>
			<Box id={4}/>
			<Box id={5}/>
			<Box id={6}/>
			<Box id={7}/>
			<Box id={8}/>
		</div>
	)
}

export default Grid
