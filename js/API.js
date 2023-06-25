const obj = {
    code: 0,
    message: 'ok',
    data: {
        title: '开往早晨的午夜',
        author: '胡彦斌/张碧晨',
        www:'https://p2.music.126.net/wYuFxK1i_5jqs58xXQ-Jfg==/109951167350445378.jpg?imageView&thumbnail=360y360&quality=75&tostatic=0',
        pic: 'images/2011141H108-5.jpg',
        audio:"images/kaiwangzaochendewuye.m4a",
        lyric: "[00:00.00] 原唱 : 张碧晨\n[00:00.53] 作词 : 李焯雄\n[00:01.06] 作曲 : 方炯嘉\n[00:01.59] 编曲 : Nick Pyo\n[00:02.12] 制作人 : 胡彦斌\n[00:02.66] 吉他 : 告五人 云安\n[00:03.19] 鼓 : 告五人 哲谦\n[00:03.72] 音乐总监 : 彭程@金牛studio\n[00:04.25] 音响总监 : 何飚\n[00:04.78] 乐队队长&键盘1：董音@牛班NEWBAND\n[00:05.32] 键盘2：叶霖@牛班NEWBAND\n[00:05.85] 吉他2：倪伟恩@牛班NEWBAND\n[00:06.38] 贝斯：宣一亨@牛班NEWBAND\n[00:06.91] 和音：张恋歌 鱼椒盐 谭佩莹 叶俊\n[00:07.44] 和音编写：张恋歌\n[00:07.98] PGM：章谋杰\n[00:08.51] 音乐混音：林梦洋\n[00:09.06]夜的星屑 不熄灭的夜\n[00:20.42]\n[00:20.43]开往早晨的午夜\n[00:24.60]终将拥抱的季节\n[00:28.47]让我们变爱人 那么狂野\n[00:37.04]\n[00:37.05]不划边界的原野\n[00:41.25]愈合抱歉的感谢\n[00:44.97]恰好的已足够\n[00:49.23]一吻一朵温柔\n[00:53.27]\n[00:53.28]曾像夜那么黑 每个清晨\n[00:57.45]曾阻挡每个梦 每一道门\n[01:01.80]终于也可能 无限可能 自由发生\n[01:09.86]\n[01:09.87]曾像爱那么真 功败垂成\n[01:13.95]曾误认的诚恳 每个猎人\n[01:18.06]终于成人 这是青春\n[01:26.36]\n[01:26.37]沿着银河 一身星屑\n[01:30.54]一身星屑 夜正倾斜\n[01:34.92]在倾斜 霓虹荒野 星的长街\n[01:43.13]\n[01:43.14]开往早晨的午夜\n[01:47.37]终将花开的花谢\n[01:51.21]让他们变我们（让他们变我们）\n[01:55.35]没保护色\n[01:59.84]\n[01:59.85]不必带走的昨天\n[02:02.82]愈合抱歉的感谢\n[02:07.80]恰好的已足够\n[02:11.94]一吻一朵温柔\n[02:16.04]\n[02:16.05]曾像夜那么黑 每个清晨\n[02:20.22]曾阻挡每个梦 每一道门\n[02:24.57]终于也可能 无限可能 自由发生\n[02:32.60]\n[02:32.61]曾像爱那么真 功败垂成\n[02:36.75]曾误认的诚恳 每个猎人\n[02:40.83]终于成人 这是青春\n[03:01.58]\n[03:01.59]曾像夜那么黑 每个清晨\n[03:05.64]随便议论举证 每个变身\n[03:09.81]同时放任（同时放任）\n[03:14.04]同时认真\n[03:18.08]\n[03:18.09]沿着银河 一身星屑\n[03:22.32]一身星屑 夜正倾斜\n[03:26.70]在倾斜 霓虹荒野 星的长街\n[04:07.85]\n[04:07.86]沿着银河 一身星屑\n[04:11.94]一身星屑 夜正倾斜\n[04:16.17]在倾斜 霓虹荒野 星的长街\n"
    }
}

const API = {
    queryLyric() {
        return new Promise(resolve => {
            setTimeout(
                () => {
                    resolve(obj)
                },
                Math.round(Math.random() * (2000 - 500) + 500)
            )
        })
    }
}
