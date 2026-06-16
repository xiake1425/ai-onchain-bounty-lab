# 2026-06-16 Opire / Algora 小怪筛选

目的：继续找低参与、低风险、能由 Codex 主要完成的小任务。优先看 GitHub issue 赏金，因为这类任务最接近“我读代码、改代码、提交 PR，用户只做最后确认”。

## 总体结论

今天没有发现可以马上无脑开工的任务。

但是 Opire / Algora 仍然比 Superteam 普通任务更适合当前路线，因为它们多数不要求充值、不要求连接钱包、不要求线下参与。主要问题是：

- 很多任务已经很旧。
- 很多任务已经有人认领或开了 PR。
- 有些平台显示 open，但 GitHub 真实 issue 已经 closed。
- 有些任务金额小，但项目太大，环境搭建成本高。

当前建议：不急着认领。今天这轮继续证明：平台列表只是入口，真正能不能做，要看 GitHub issue 是否还开着、仓库是否还公开、是否已经有 PR 在 claim。

## 通过安全边界但需要观察

### 1. Mudlet generic mapper video walkthrough

- Task: 给 Mudlet 的 generic mapper 做设置视频/说明。
- Link: https://github.com/Mudlet/Mudlet/issues/3172
- Platform: Algora / Mudlet bounty page.
- Reward: 50 USD.
- Why it may fit: GitHub issue 标了 `good first issue`，内容是教程/说明，不是交易、不碰钱包。
- User action needed: 如果真做视频，可能需要我生成脚本和素材，最后由你确认是否用你的 GitHub 账号提交。
- Risk check: 任务开得很早，且需要“视频 walkthrough”，可能需要安装/录屏/理解 Mudlet 软件；Algora 记录里已有多人 attempt，且要求 PR 里附 proof/screencast。
- Recommendation: skip for now。不是低参与小怪。

### 2. Nest js icons

- Task: VS Code icon theme里 NestJS 文件图标没有按预期显示。
- Opire: https://app.opire.dev/issues/01JH00AXGKW2B660P4QE078RKC
- GitHub: https://github.com/tal7aouy/vscode-icons/issues/87
- Reward: 20 USD.
- Why it may fit: 看起来是图标/配置类小问题，不涉及钱包或账号。
- User action needed: 如果提交 PR，需要你最后确认。
- Risk check: 金额小，已有 1 个 solver；GitHub 仓库有重定向，当前公开访问有些不稳定。
- Recommendation: watch。适合练手，但收益太小，不作为第一目标。

## 新增排除或暂不做

### 1. aueangpanit/electron-template tray icon indicator

- Task: macOS 托盘图标加橙色圆点，同时保留模板图标随系统主题变色的效果。
- Opire: https://app.opire.dev/issues/01K6K4YTSWT7XF53GM3KCTBG7S
- GitHub: https://github.com/aueangpanit/electron-template/issues/1
- Reward: 100 USD.
- Why it may fit: 小仓库、TypeScript、问题描述清楚。
- User action needed: 如果最终提交 PR，需要你确认是否用 GitHub 发 PR。
- Risk check: Opire 页面还在，但 GitHub 仓库真实访问返回 404，本地也无法拉取。
- Recommendation: skip。入口坏了。

### 2. Tailcall Lighthouse performance tasks

- Algora: https://algora.io/tailcallhq/bounties
- GitHub homepage issue: https://github.com/tailcallhq/tailcallhq.github.io/issues/217
- GitHub playground issue: https://github.com/tailcallhq/tailcallhq.github.io/issues/216
- Reward: 100 USD each.
- Reason: 页面性能任务看起来适合 Codex，但已经有很多公开 PR claim，且多人已提交 Lighthouse 100 证据。继续做大概率只是排队撞车。

### 3. Unsiloed-chunker tasks

- Algora: https://algora.io/unsiloed-ai/bounties?status=open
- Reward: mostly 50 USD.
- Reason: Algora 能搜到任务，但多个 GitHub issue / repo 公开访问返回 404。跳过。

## 早前排除或暂不做

### 4. formbricks success toast bug

- Opire: https://app.opire.dev/issues/01JARC75G44M6EQCJCR1DTBHD6
- GitHub: https://github.com/formbricks/formbricks/issues/3302
- Reward: 60 USD.
- Reason: Opire 仍显示 open，但 GitHub issue 已经 closed。状态不一致，不做。

### 5. ToolJet code-hinter header text

- Opire: https://app.opire.dev/issues/01J8898W2WES9F4FJ57GDG0BYS
- GitHub: https://github.com/ToolJet/ToolJet/issues/6655
- Reward: 45 USD.
- Reason: GitHub issue 已经 closed，且 ToolJet 是大仓库，PR 和 issue 很多。状态不一致，不做。

### 6. mmccl5/go-task-task race condition

- Opire listing shows: 41 USD.
- GitHub issue: https://github.com/mmccl5/go-task-task/issues/1
- Existing PR: https://github.com/mmccl5/go-task-task/pull/3
- Reason: 相关 PR 已经存在并 claim 了 issue，GitHub 搜索还显示已有 merged/completed 历史。不要抢。

### 7. Arakoo EdgeChains AWS Comprehend

- Algora: https://algora.io/arakoodev/bounties?status=open
- GitHub: https://github.com/Arakoodev/EdgeChains/issues/290
- Reward: 50 USD + older 25 USD listing.
- Reason: 需要接 AWS Comprehend、写测试、写 example、还要 Loom 视频。已有很多 claims。对当前阶段来说偏重。

### 8. tscircuit bounties

- Algora: https://algora.io/tscircuit/bounties?status=open
- Reason: 多数 claim 数很高，很多是电路/PCB/转换器专门领域。暂不碰。

### 9. Cloudgakkai fingerprint-suite

- Algora: https://algora.io/cloudgakkai/bounties?status=open
- Reason: 多数任务 20 个月前，且涉及浏览器指纹/反检测方向，合规和用途不够舒服。跳过。

## 下一步建议

下一步不是让用户看网页。

下一步由 Codex 做：

1. 暂不认领今天看到的任何任务。
2. 继续扫新鲜的 Opire / Algora 小额任务，优先最近 30 天、0-2 个 solvers、文档/前端/配置类任务。
3. 如果当天没有新鲜任务，就回到主动外联路线：找小项目做 1 页免费 review，换回复和案例。

## Payoneer 状态

Payoneer 已审核通过，但当前阶段暂时不用它。以后凡是要看 Payoneer，都按规则：只用澳门卡手机打开，不用电脑登录。
