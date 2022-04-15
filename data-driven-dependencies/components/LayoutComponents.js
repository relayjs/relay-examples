import NextLink from 'next/link';

export function Layout(props) {
  return <div className="min-h-full">{props.children}</div>;
}

export function Content(props) {
  return (
    <main>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8" {...props} />
    </main>
  );
}

export function Title(props) {
  return (
    <h1
      className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-10"
      {...props}
    />
  );
}

export function Text(props) {
  return <p className="mt-4 text-xl text-gray-500" {...props}></p>;
}

export function Button({size, ...props}) {
  const sizeClasses = size === 'small' ? 'px-2' : 'py-3 px-8 font-medium';
  return (
    <button
      className={`inline-block text-center bg-indigo-600 border border-transparent rounded-md text-white hover:bg-indigo-700 ${sizeClasses}`}
      {...props}
    />
  );
}

export function Link(props) {
  const {children, ...rest} = props;
  return (
    <NextLink {...rest}>
      <a className="text-base font-semibold text-gray-900 underline cursor-pointer text-blue-600 hover:text-blue-800 visited:text-purple-600">
        {children}
      </a>
    </NextLink>
  );
}
