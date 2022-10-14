import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";


export interface TextInputRootProps{
    children: ReactNode
}

function TextInputRoot({children}: TextInputRootProps){
    return(
        <div className='flex items-center h-12 gap-3 py-4 px-3 bg-gray-800 rounded w-full focus-within:ring-2 ring-cyan-300' >
            {children}
       </div>
    )
}
TextInputRoot.displayName = 'TextInput.Root';


interface TextInputIconProps{
    children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps ){
    return(
        <Slot className='w-6 h-6 text-gray-400' >
            {props.children}
        </Slot>
    )
}
TextInputIcon.displayName = 'TextInput.Icon';

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}


function TextInputInput(props: TextInputInputProps){
   
    return(
        <input className={clsx(
            'bg-transparent flex-1 text-gray-100  text-sx placeholder:text-gray-400 outline-none',
        )}
        {...props}
        />            
    )
}
TextInputInput.displayName = 'TextInput.Input';


export const TextInput ={
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}

