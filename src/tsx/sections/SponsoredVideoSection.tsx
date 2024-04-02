import PrimaryButton from '../components/PrimaryButton';
import { cn } from '../utils/cn';

type SponsoredVideoSectionProps = {
  videoUrl: string;
  title: string;
  description: string;
  videoSide?: 'left' | 'right';
  callToAction?: string;
  callToActionUrl?: string;
};

const SponsoredVideoSection = ({
  description,
  title,
  videoUrl,
  videoSide = 'left',
  callToAction = 'Learn More',
  callToActionUrl,
}: SponsoredVideoSectionProps) => {
  return (
    <section className="py-28">
      <div
        className={cn('container mx-auto flex flex-wrap lg:flex-nowrap gap-6 md:gap-[60px]', {
          'lg:flex-row-reverse': videoSide == 'right',
        })}
      >
        <iframe
          className="w-full aspect-[16/9] lg:basis-[60%]"
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className={cn({ 'lg:text-right': videoSide === 'right' })}>
          <h3 className="font-semibold text-[44px] leading-[48.4px] mb-8">{title}</h3>
          <div className="text-lg leading-[21.6px] text-[#64748B] mb-[60px]">{description}</div>
          <a href={callToActionUrl} target="_blank">
            <PrimaryButton
              label={callToAction}
              buttonPt={{ className: 'py-3 px-5 inline-flex' }}
              innerPt={{ className: 'text-lg' }}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SponsoredVideoSection;
