import HomeClient from './HomeClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Ignius Paramedical College - Quality healthcare education in Patna, Bihar since 2000. BMLT, DMLT, BPT, BOTT courses with globally recognized certificates.',
};

export default function Home() {
  return <HomeClient />;
}
