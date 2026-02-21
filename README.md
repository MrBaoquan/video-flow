# Video Flow

> 基于 [Remotion](https://www.remotion.dev/) 的视频渲染 Demo，使用 React + TypeScript 编写帧驱动动画。

## 项目介绍

**Video Flow** 是一个使用 Remotion v4 构建的视频渲染示例项目，展示如何用 React 组件和 TypeScript 制作程序化视频动画。

## 前置要求

- Node.js >= 18

## 安装步骤

```bash
npm install
```

## 启动预览

```bash
npm run dev
```

启动后在浏览器打开 Remotion Studio，可实时预览所有动画组件。

## 渲染视频

```bash
npm run build
```

将 `HelloWorld` 合成渲染为 `out/HelloWorld.mp4`。

## Demo 组件列表

| 组件 | 说明 |
|------|------|
| `HelloWorld` | 文字弹出动画，演示 `spring()` 弹性缩放与 `interpolate()` 淡入效果 |
| `LogoAnimation` | 几何图形依次出现的序列动画，演示 `<Sequence>` 的时间编排与旋转/缩放变换 |
| `SlideShow` | 多幻灯片演示，演示淡入淡出与上滑入场的幻灯片切换效果 |

## 项目结构

```
video-flow/
├── src/
│   ├── index.ts                    # 入口，调用 registerRoot()
│   ├── Root.tsx                    # 注册所有合成 (Composition)
│   ├── HelloWorld/
│   │   └── HelloWorld.tsx          # Hello World 文字动画
│   ├── LogoAnimation/
│   │   └── LogoAnimation.tsx       # 几何图形序列动画
│   └── SlideShow/
│       └── SlideShow.tsx           # 多幻灯片演示
├── remotion.config.ts              # Remotion 打包配置
├── tsconfig.json                   # TypeScript 配置
└── package.json
```

## 相关链接

- [Remotion 官方文档](https://www.remotion.dev/docs)
- [Remotion GitHub](https://github.com/remotion-dev/remotion)
