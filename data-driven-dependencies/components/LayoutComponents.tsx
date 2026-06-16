import NextLink from 'next/link';
import type {ComponentProps} from 'react';

export function Layout(props: ComponentProps<'div'>) {
  return <div className="min-h-full">{props.children}</div>;
}

export function Content(props: ComponentProps<'div'>) {
  return (
    <main>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8" {...props} />
    </main>
  );
}

export function Title(props: ComponentProps<'h1'>) {
  return (
    <h1
      className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-10"
      {...props}
    />
  );
}

export function Text(props: ComponentProps<'p'>) {
  return <p className="mt-4 text-xl text-gray-500" {...props}></p>;
}

export function Button({
  size,
  ...props
}: {size?: 'small'} & ComponentProps<'button'>) {
  const sizeClasses = size === 'small' ? 'px-2' : 'py-3 px-8 font-medium';
  return (
    <button
      className={`inline-block text-center bg-indigo-600 border border-transparent rounded-md text-white hover:bg-indigo-700 ${sizeClasses}`}
      {...props}
    />
  );
}

export function Link(props: ComponentProps<typeof NextLink>) {
  const {children, ...rest} = props;
  return (
    <NextLink
      className="text-base font-semibold text-gray-900 underline cursor-pointer text-blue-600 hover:text-blue-800 visited:text-purple-600"
      {...rest}>
      {children}
    </NextLink>
  );
}
