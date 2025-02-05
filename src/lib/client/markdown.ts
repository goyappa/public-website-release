import showdown from 'showdown';

const classMap: { [key: string]: string } = {
	p: 'my-5 text-base',
	h1: 'my-8 text-3xl font-bold',
	h2: 'my-8 text-2xl font-bold',
	h3: 'my-8 text-xl font-bold',
	h4: 'my-5 text-lg font-bold',
	ul: 'my-5 text-base list-disc list-inside',
	ol: 'my-5 text-base list-decimal list-inside',
	li: '[&>ul]:ml-4 [&>ol]:ml-4',
	a: 'font-semibold text-yappa-blue-400 hover:text-yappa-blue-300 transition-colors',
	code: 'font-monospace text-sm max-h-96',
	pre: 'font-monospace text-sm bg-white'
};
const bindings = Object.keys(classMap).map((key) => ({
	type: 'output',
	regex: new RegExp(`<${key}(\s+\w+=".*")* ?(class="(.*)")?(\s+\w+=".*")*>`, 'g'),
	replace: `<${key} $1 class="${classMap[key]} $3" $4>`
}));

// Specific binding for <a> tag
bindings.push({
	type: 'output',
	regex: /<a(\s+\w+=".*")* ?(class="(.*)")?(\s+\w+=".*")*>/g,
	replace: `<a $1 class="${classMap['a']} $3" $4>`
});

export const mdConverter = new showdown.Converter({
	noHeaderId: true,
	extensions: [bindings]
});
