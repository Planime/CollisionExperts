import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'

// Базовые пропсы для любого поля
interface BaseFieldProps {
	label?: string
	error?: string
}

// Для input
export type InputFieldProps = BaseFieldProps & {
	isTextarea?: false
	registration?: UseFormRegisterReturn
} & InputHTMLAttributes<HTMLInputElement>

// Для textarea
export type TextareaFieldProps = BaseFieldProps & {
	isTextarea: true
	registration?: UseFormRegisterReturn
} & TextareaHTMLAttributes<HTMLTextAreaElement>

// Объединяем
export type FieldProps = InputFieldProps | TextareaFieldProps
