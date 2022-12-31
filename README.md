# VitePractice
`create-react-app`을 사용하지 않고 React 프로젝트를 직접 설정해보는 프로젝트.
- [왜 하는가?](https://vitejs-kr.github.io/guide/why.html)
- [결과물 보기](https://vite-practice.vercel.app/)

# 설치 과정
- 새로 설정 파일을 작성하거나 이전에 쓰던 설정 파일을 가져오기
  - 예를 들어,
  - `package.json`
  - `tsconfig.json`
  - `tsconfig.node.json`
  - `vercel.json`
  - `vite.config.ts`
  - `.eslintignore`
  - `.eslintrc.cjs`
  - `.gitignore`
  - `index.html`과 그에 따른 리액트 컴포넌트 `src/*.tsx`
  - `src/react-app-env.d.ts` 리액트 환경설정 파일
  - 등등
- `yarn set version berry`
- `yarn`
- `yarn dlx @yarnpkg/sdks vscode`
- `yarn plugin import typescript`
- `yarn start`, `yarn build`, `yarn preview`, `yarn lint`가 정상 작동하는지 확인


# 설치 시 참고한 사이트
- https://vitejs-kr.github.io/guide/#trying-vite-online
- https://stackblitz.com/edit/vitejs-vite-9mkdps?file=_gitignore&terminal=dev
- https://toss.tech/article/node-modules-and-yarn-berry
- https://kasterra.github.io/setting-yarn-berry/
