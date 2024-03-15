import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  index: number;
  image: string;
  title: string;
  content: string;
}

const Values: React.FC<Props> = ({ image, title, content, className, index }) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: '.9', delay: 0.1 + (index / 10) * 2 }}
      className={cn(
        'py-8 px-5 md:px-6 border-[1.5px] border-[#445D65]/30 rounded-xl overflow-hidden shadow-sm',
        className
      )}
    >
      <div className="mb-4 w-fit">
        <Image src={image} alt={title} width={75} height={75} />
      </div>
      <h4 className="text-[#014751] text-xl mb-3 font-bold">{title}</h4>
      <p className="text-[#445D65] text-base">{content}</p>
    </motion.div>
  );
};

export default Values;
