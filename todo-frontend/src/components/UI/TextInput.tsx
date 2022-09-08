import React, { FC, Fragment, useState } from "react";

type Props = {
	children?: React.ReactNode | string;
	placeholder?: string;
	id: string;
	label: string;
	onClick?: () => void;
	onInput: (event: React.FormEvent<HTMLInputElement>) => void;
	className?: string;
	value?: string;
};

const TextInput: FC<Props> = ({
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
		<Fragment>
			<label
				className="opacity-50 mb-0.5 text-sm border-b-2  w-fit border-light-blue border-opacity-80 pr-4"
				htmlFor={id}
			>
				{label}
			</label>
			<input
				name={id}
				type="input"
				value={value}
				placeholder={placeholder}
				onInput={(e) => onInput(e)}
				className={
					"min-h-[1.1rem] text-brown-gray w-fit bg-white focus:bg-light-blue focus:bg-opacity-30 rounded-md box-border border-none py-0.5 px-1 ::placeholder-white" +
					" " +
					className
				}
			/>
		</Fragment>
	);
};

export default TextInput;
