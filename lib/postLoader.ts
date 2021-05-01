import glob from 'glob';

type PostPathType = {
  path: string,
  fileName: string,
};

export const getPostPaths = () => {
  const filePaths = glob.sync('./articles/**/*.md');
  const fileName = filePaths
    .map(fp => fp.match(/\/(\w|-)+\.md$/g)[0])
    .map(res => res.replace(/[\/(.md)]/g, ''));


  const postPaths: PostPathType[] = [];
  for (let i = 0; i < filePaths.length; i++) {
    postPaths[i] = {
      path: filePaths[i],
      fileName: fileName[i],
    };
  }

  return postPaths;
}
