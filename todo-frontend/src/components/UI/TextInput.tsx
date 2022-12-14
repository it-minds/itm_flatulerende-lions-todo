import React, { FC, Fragment, useState } from "react";

type Props = {
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
	children?: React.ReactNode | string;
	placeholder?: string;
	id: string;
	label?: string;
	onClick?: () => void;
	onInput: (event: React.FormEvent<HTMLInputElement>) => void;
	className?: string;
	value?: string;
};

const TextInput: FC<Props> = ({
	onBlur,
	children,
	onClick,
	id,
	label,
	placeholder,
	className,
	onInput,
	value,
}) => {
	return (
		<div className="flex flex-col w-full">
			{label && (
				<label
					className="mx-1 opacity-60 mb-0.5 text-sm border-b-2  w-fit border-light-blue border-opacity-80 pr-4"
					htmlFor={id}
				>
					{label}
				</label>
			)}
			<input
				onBlur={onBlur}
				name={id}
				type="input"
				value={value}
				placeholder={placeholder}
				onInput={(e) => onInput(e)}
				className={`min-h-[1.1rem] input ${className}`}
			/>
		</div>
	);
};

export default TextInput;
