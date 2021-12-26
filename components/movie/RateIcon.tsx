import { RoundIcon } from "components/common/RoundIcon"
import { FaStar } from "react-icons/fa"

interface RateIconProps {
    color: String,
    className: String
}

export const RateIcon = ({ color = 'slate-200', className = '' }: RateIconProps) => (
    <RoundIcon color={color} className={className}>
        <FaStar />
    </RoundIcon>
)