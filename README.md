# VitePractice
`create-react-app`을 사용하지 않고 React 프로젝트를 직접 설정해보는 프로젝트.
- [왜 하는가?](https://vitejs-kr.github.io/guide/why.html)
- [결과물 보기](https://vite-practice.vercel.app/)

# 설치 과정
- `package.json` 작성
- `npm install -g yarn`
- `yarn set version berry`
- `yarn install`
- `tsconfig.json`, `tsconfig.node.json`, `vite.config.ts`, `.gitignore` 등등의 설정 파일 작성
- `yarn dlx @yarnpkg/sdks vscode`
- `yarn plugin import typescript`
- `yarn dlx eslint --init`
- `index.html`, `src/index.tsx`, `src/Main.tsx` 작성
- `yarn start`, `yarn build`, `yarn preview`가 정상 작동하는지 확인

# 설치 시 참고한 사이트
- https://vitejs-kr.github.io/guide/#trying-vite-online
- https://stackblitz.com/edit/vitejs-vite-9mkdps?file=_gitignore&terminal=dev
- https://toss.tech/article/node-modules-and-yarn-berry
- https://kasterra.github.io/setting-yarn-berry/
