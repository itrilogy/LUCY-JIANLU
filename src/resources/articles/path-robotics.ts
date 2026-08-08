import { def } from './helpers'
import type { ArticleResource } from '@/typings'

/**
 * OOMWOO 开源扫地机 / ROS2 工程
 * 源：Research Notes/开源扫地机器人-oomwoo/oomwoo
 */
export const ROBOTICS_ARTICLES: ArticleResource[] = [
  def({
    id: 'ros2-pub-sub-py-l2',
    name: 'ROS2 · 发布订阅示意',
    description: 'OOMWOO/ROS2：topic publisher 结构（教学伪码）',
    category: '代码片段',
    tags: ['Python', 'Level 2', 'ROS2', '机器人', 'OOMWOO'],
    language: 'python',
    codeLanguage: 'python',
    level: 2,
    track: 'cs-programming',
    module: 'OOMWOO-ROS2',
    content: `#: 💡 伪码：节点发布 LaserScan 风格消息
class ScanPublisher:
    def __init__(self, topic='/scan'):
        self.topic = topic
        self.count = 0

    def publish(self, ranges):
        self.count += 1
        return {
            'topic': self.topic,
            'frame_id': 'laser',
            'ranges': ranges,
            'seq': self.count,
        }

pub = ScanPublisher()
print(pub.publish([1.0, 1.2, 0.8]))`,
  }),

  def({
    id: 'ros2-costmap-inflate-py-l3',
    name: 'ROS2 · 代价地图膨胀示意',
    description: 'Nav2 概念：占用格膨胀保持安全距离',
    category: '代码片段',
    tags: ['Python', 'Level 3', 'ROS2', '导航', 'OOMWOO'],
    language: 'python',
    codeLanguage: 'python',
    level: 3,
    track: 'cs-programming',
    module: 'OOMWOO-ROS2',
    content: `#: 💡 简化膨胀：障碍邻域提高代价
def inflate(grid, radius=1, lethal=100):
    h, w = len(grid), len(grid[0])
    out = [row[:] for row in grid]
    for i in range(h):
        for j in range(w):
            if grid[i][j] >= lethal:
                for di in range(-radius, radius + 1):
                    for dj in range(-radius, radius + 1):
                        ni, nj = i + di, j + dj
                        if 0 <= ni < h and 0 <= nj < w:
                            out[ni][nj] = max(out[ni][nj], lethal // 2)
    return out

g = [[0, 0, 0], [0, 100, 0], [0, 0, 0]]
print(inflate(g))`,
  }),

  def({
    id: 'ros2-diff-drive-py-l2',
    name: 'ROS2 · 差速轮运动学',
    description: 'OOMWOO：左右轮速到线速度/角速度',
    category: '代码片段',
    tags: ['Python', 'Level 2', '机器人', '控制', 'OOMWOO'],
    language: 'python',
    codeLanguage: 'python',
    level: 2,
    track: 'cs-programming',
    module: 'OOMWOO-ROS2',
    content: `#: 💡 v = (vl+vr)/2 , w = (vr-vl)/L
def diff_drive(vl, vr, wheel_base):
    v = 0.5 * (vl + vr)
    w = (vr - vl) / wheel_base
    return v, w

#: 💡 由目标 v,w 反解轮速
def wheel_speeds(v, w, wheel_base):
    vl = v - 0.5 * w * wheel_base
    vr = v + 0.5 * w * wheel_base
    return vl, vr

print(diff_drive(0.2, 0.3, 0.25))`,
  }),

  def({
    id: 'ros2-eng-architecture-l2',
    name: 'OOMWOO 英文 · 仿真优先架构',
    description: 'ARCHITECTURE：模块接口、Gazebo 先于真机',
    category: '英文文章',
    tags: ['English', 'Level 2', 'ROS2', 'OOMWOO'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    track: 'english-literacy',
    module: 'OOMWOO-ROS2',
    content: `//: 💡 仿真优先
Software should run in Gazebo before it runs on hardware.
Contributors without a robot can still build and test.

//: 💡 可替换模块
Every module exposes a published interface contract.
A compliant implementation can replace another without internal coupling.`,
  }),

  def({
    id: 'ros2-eng-frames-l2',
    name: 'OOMWOO 英文 · 坐标系约定',
    description: 'REP-103：x 前 y 左 z 上，右手系',
    category: '英文文章',
    tags: ['English', 'Level 2', 'ROS2', 'OOMWOO'],
    language: 'english',
    codeLanguage: 'markdown',
    level: 2,
    track: 'english-literacy',
    module: 'OOMWOO-ROS2',
    content: `//: 💡 base_link
Define base_link origin and orientation first.
REP-103 uses x forward, y left, and z up.

//: 💡 单位
Use millimeters or meters consistently, kilograms, and radians.
Right-handed frames keep transforms coherent across modules.`,
  }),

  def({
    id: 'ros2-qos-reliability-py-l3',
    name: 'ROS2 · QoS 可靠性选择',
    description: '尽力而为 vs 可靠传输的配置示意',
    category: '代码片段',
    tags: ['Python', 'Level 3', 'ROS2', 'OOMWOO'],
    language: 'python',
    codeLanguage: 'python',
    level: 3,
    track: 'cs-programming',
    module: 'OOMWOO-ROS2',
    content: `#: 💡 教学用 QoS 配置字典
def qos_for(topic_kind):
    if topic_kind == 'sensor':
        return {'reliability': 'best_effort', 'history': 'keep_last', 'depth': 5}
    if topic_kind == 'command':
        return {'reliability': 'reliable', 'history': 'keep_last', 'depth': 10}
    return {'reliability': 'reliable', 'history': 'keep_last', 'depth': 1}

print(qos_for('sensor'))
print(qos_for('command'))`,
  }),
]
