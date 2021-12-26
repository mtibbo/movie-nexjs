import { Result } from "lib/types";

interface MovieBackgroundProps {
    videos: Result[]
}

const getYoutubeVideoSrc = (key: string) => `https://www.youtube.com/embed/${key}?showinfo=0`;

const getRandomYoutubeVideo = (videos: Result[]) => getYoutubeVideoSrc(videos.find((v) => v.key)?.key)


export const MovieBackground = ({ videos }: MovieBackgroundProps) => (
    <div className="mt-5 flex justify-center h-128 w-full relative">
        <iframe
            className='w-10/12 rounded-lg drop-shadow-xl'
            src={getRandomYoutubeVideo(videos)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    </div>
)