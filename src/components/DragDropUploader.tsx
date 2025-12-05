import { type ChangeEvent, type DragEvent, useRef, useState } from 'react'

interface UploadedFile {
	id: string
	file: File
}

interface DragDropUploaderProps {
	onFilesChange: (files: File[]) => void
}

export default function DragDropUploader({
	onFilesChange
}: DragDropUploaderProps) {
	const inputRef = useRef<HTMLInputElement | null>(null)
	const [files, setFiles] = useState<UploadedFile[]>([])
	const maxFiles = 5

	const handleBrowseClick = () => {
		inputRef.current?.click()
	}

	const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
		const selected = e.target.files
		if (!selected) return
		processFiles(selected)
	}

	const handleDrop = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		if (e.dataTransfer.files) processFiles(e.dataTransfer.files)
	}

	const processFiles = (fileList: FileList) => {
		const newFiles: UploadedFile[] = []

		for (let i = 0; i < fileList.length; i++) {
			const file = fileList[i]
			if (!file.type.startsWith('image/')) continue
			newFiles.push({ id: crypto.randomUUID(), file })
		}

		setFiles(prev => {
			const combined = [...prev, ...newFiles].slice(0, maxFiles)
			onFilesChange(combined.map(f => f.file))
			return combined
		})
	}

	const handleRemove = (id: string) => {
		setFiles(prev => {
			const updated = prev.filter(f => f.id !== id)
			onFilesChange(updated.map(f => f.file))
			return updated
		})
	}

	const preventDefaults = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault()
	}

	return (
		<div className='relative'>
			<div
				onDrop={handleDrop}
				onDragOver={preventDefaults}
				onDragEnter={preventDefaults}
				className='focus:border-accent relative h-[90px] resize-none rounded-lg border border-dashed border-[#D2D2D2] bg-white p-4 text-sm transition outline-none placeholder:text-[#737373] md:h-[120px]'
			>
				<input
					type='file'
					accept='image/*'
					multiple
					className='hidden'
					ref={inputRef}
					onChange={handleFileSelect}
				/>
				<div>
					<div className='w-full overflow-hidden text-center text-ellipsis'>
						<h3 className='font-semibold wrap-break-word text-[#D2D2D2] lg:text-2xl'>
							Drag & Drop Files Here
						</h3>
						<span className='text-xs text-[#D2D2D2]'>or</span>
						<div className='codedropz-btn-wrap'>
							<span
								className='text-accent cursor-pointer'
								onClick={handleBrowseClick}
							>
								Browse Files
							</span>
						</div>
					</div>
				</div>
				<span className='absolute right-1 bottom-1 text-xs text-[#d2d2d2]'>
					<span>{files.length}</span> of {maxFiles}
				</span>
			</div>

			{files.length > 0 && (
				<ul className='mt-2 flex flex-col'>
					{files.map(({ id, file }) => (
						<li
							key={id}
							className='flex items-center justify-between rounded-md py-1 text-xs'
						>
							<span className='text-accent text-[10px] font-medium'>
								{file.name} ({Math.round(file.size / 1024)} KB)
							</span>
							<button
								onClick={() => handleRemove(id)}
								className='h-6 w-6 cursor-pointer p-1 text-red-500'
							>
								✕
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
