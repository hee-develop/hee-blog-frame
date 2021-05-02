import fs from 'fs';
import matter from 'gray-matter';
import glob from 'glob';

type PostPathType = {
  path: string,
  fileName: string,
};

export const getPostFile = (fileDir: string) => {
  return fs.readFileSync(fileDir);
};

export const getPostData = (post: Buffer) => {
  const postData = matter(post);

  return {
    ...postData,
    title: postData.data.title,
    date: postData.data.date,
  };
};

export const getPostPaths = function() {
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
};

export const getAllPostData = function() {
  return getPostPaths()
    .map(postPath => ({ fileName: postPath.fileName, file: getPostFile(postPath.path) }))
    .map(({ fileName, file }) => ({ ...getPostData(file), fileName }));
}
