import classes from './hero.module.css';
import Image from 'next/image';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/wink.png"
          alt="an image showing yuyu"
          width={250}
          height={250}
        />
      </div>
      <h1>Hi I'm YuYu</h1>
      <p>I blog about web development</p>
    </section>
  );
}

export default Hero;
