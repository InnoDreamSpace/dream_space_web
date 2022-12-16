import React, { ReactElement } from 'react';
import { Field, useField } from 'formik';

type FormSelectProps = React.HTMLProps<HTMLInputElement> & {
  id: string;
  className?: string;
  controllClassName?: string;
  icon?: ReactElement;
  label?: string;
  name: string;
  options?: {
    value: string;
    title: string;
  }[];
};

export const FormSelect = ({
  className,
  controllClassName,
  icon,
  label,
  options,
  ...props
}: FormSelectProps) => {
  const [field, meta] = useField(props);

  return (
    <div className={className}>
      <div className='flex'>
        {label && (
          <label htmlFor={props.id} className='text-xs font-semibold px-1'>
            {label}
          </label>
        )}
        {meta.touched && meta.error ? (
          <div className='text-xs px-1 text-red-400'>{meta.error}</div>
        ) : null}
      </div>
      <div className={'flex'}>
        <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
          {icon}
        </div>
        <Field
          as='select'
          className={`${controllClassName} py-[0.7rem] w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 bg-white outline-none focus:border-brown-600 ${
            meta.error ? 'border-red-100' : 'border-gray-200'
          }`}
          {...field}
          {...props}
        >
          {options?.map((option) => (
            <option value={option.value} key={option.value}>
              {option.title}
            </option>
          ))}
        </Field>
      </div>
    </div>
  );
};
