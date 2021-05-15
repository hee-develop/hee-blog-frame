import fs from 'fs';
import matter from 'gray-matter';
import glob from 'glob';

type PostPathType = {
  path: string,
  postName: string,
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

const getFolderName = (pathName: string) => {
  const splitted = pathName.split('/');
  if (splitted.length < 2) {
    return '';
  }

  return splitted[splitted.length - 2];
};

export const getPostPaths = function() {
  const articlePath = process.env.ARTICLE_PATH ?? './articles';
  const filePaths = glob.sync(`${articlePath}/**/*.md`);

  const pathAndFolderArr = filePaths.map(fp => ({
    path: fp,
    folderName: getFolderName(fp)
  }));

  const postPaths: PostPathType[] = pathAndFolderArr.map(pathAndFolder => ({
    path: pathAndFolder.path,
    postName: pathAndFolder.folderName,
  }));

  return postPaths;
};

export const getAllPostData = function() {
  return getPostPaths()
    .map(postPath => ({ postName: postPath.postName, file: getPostFile(postPath.path) }))
    .map(({ postName, file }) => ({ ...getPostData(file), postName }));
}
