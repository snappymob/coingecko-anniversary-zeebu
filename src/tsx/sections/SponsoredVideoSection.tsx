import PrimaryButton from '../components/PrimaryButton';
import { cn } from '../utils/cn';

type SponsoredVideoSectionProps = {
  videoUrl: string;
  title: string;
  children?: React.ReactNode;
  pt?: React.HTMLAttributes<HTMLDivElement>;
  videoSide?: 'left' | 'right';
  callToAction?: string;
  callToActionUrl?: string;
};

const SponsoredVideoSection = ({
  title,
  videoUrl,
  pt = {},
  videoSide = 'left',
  callToAction = 'Learn More',
  callToActionUrl,
  children,
}: SponsoredVideoSectionProps) => {
  const { className, ...rest } = pt;

  return (
    <section className={cn('py-12', className)} {...rest}>
      <div
        className={cn('container mx-auto flex flex-wrap lg:flex-nowrap gap-6 md:gap-[60px]', {
          'lg:flex-row-reverse': videoSide == 'right',
        })}
      >
        <iframe
          width="500"
          className="w-full aspect-[16/9]"
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="lg:basis-[40%] lg:flex-none">
          <h3 className="font-semibold text-[44px] leading-[48.4px] mb-8">{title}</h3>
          <div className="text-lg leading-[21.6px] text-[#64748B] mb-8 lg:mb-14">{children}</div>
          <a href={callToActionUrl} target="_blank">
            <PrimaryButton buttonPt={{ className: 'py-3 px-5 inline-flex' }} innerPt={{ className: 'text-lg' }}>
              {callToAction}
            </PrimaryButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SponsoredVideoSection;
