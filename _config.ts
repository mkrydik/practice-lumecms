import lume from 'lume/mod.ts';

const site = lume({
  src: './src',
  dest: './docs',
  prettyUrls: false
});

export default site;
