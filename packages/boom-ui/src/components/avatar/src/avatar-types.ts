import { PropType} from 'vue';
export type AvatarType =  number | 'default' | 'large' | 'small' ;
export type AvatarMode = 'string' | 'icon' | 'img';

export const avatarProps = {
    // 头像尺寸 'default' | 'large' | 'small' | number
    size: {
        type: String as PropType<AvatarType>,
        default: 'default',
    },
    // 头像地址
    src: {
        type: String,
        default: '',
    },
    // 头像模式 'string' | 'icon' | 'img'
    type: {
        type: [String,Number] as PropType<AvatarMode>,
        default: 'icon',
    },
    // 背景颜色
    bg_color: {
        type: String,
        default: '',
    },
    color: {
        type: String,
        default: '',
    },
}

