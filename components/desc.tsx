import BlurFade from './magicui/blur-fade';

export default function Description({description}) {
    return (
        <desc>
            <BlurFade delay={0.25 * 2} inView>
                <div className='flex flex-col px-4 py-8  gap-4'>
                    {description}
                </div>
            </BlurFade>
        </desc>
    )
}