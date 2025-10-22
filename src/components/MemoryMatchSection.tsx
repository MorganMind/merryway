'use client';

import { motion } from 'framer-motion';
import { Card } from './Card';
import { Button } from './Button';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from './Dialog';
import { useState } from 'react';
import { Heart, Camera, Smile } from 'lucide-react';

export function MemoryMatchSection() {
  const [showDemo, setShowDemo] = useState(false);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const sampleCards = [
    { id: 1, icon: Heart, text: 'Family Picnic', matched: false },
    { id: 2, icon: Camera, text: 'Beach Day', matched: false },
    { id: 3, icon: Smile, text: 'Park Adventure', matched: false },
    { id: 4, icon: Heart, text: 'Family Picnic', matched: false },
    { id: 5, icon: Camera, text: 'Beach Day', matched: false },
    { id: 6, icon: Smile, text: 'Park Adventure', matched: false },
  ];

  const handleCardClick = (cardId: number) => {
    if (flippedCards.length < 2 && !flippedCards.includes(cardId) && !matchedCards.includes(cardId)) {
      const newFlipped = [...flippedCards, cardId];
      setFlippedCards(newFlipped);

      if (newFlipped.length === 2) {
        setTimeout(() => {
          const [first, second] = newFlipped;
          const firstCard = sampleCards.find(c => c.id === first);
          const secondCard = sampleCards.find(c => c.id === second);
          
          if (firstCard && secondCard && firstCard.text === secondCard.text) {
            setMatchedCards([...matchedCards, first, second]);
          }
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <section className="py-20 bg-background-soft">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-ink font-heading mb-6 tracking-wide"
            variants={itemVariants}
          >
            Family{' '}
            <span className="text-primary">Memory Match</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Play with your own photos—toddlers to teens at the same time. Save a recap to Yesterday.
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <Card variant="elevated" className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-ink font-heading mb-4">
                The only persistent game
              </h3>
              <p className="text-gray-600 mb-6">
                Turn your family photos into a fun matching game that everyone can play together.
              </p>
              <Button
                variant="primary"
                size="lg"
                withSparkle
                onClick={() => setShowDemo(true)}
              >
                Play a sample board
            </Button>
            </div>

            {/* Sample Grid Preview */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              {sampleCards.slice(0, 6).map((card) => (
                <motion.div
                  key={card.id}
                  className="aspect-square bg-background-soft rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <card.icon className="w-8 h-8 text-primary" />
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-6">
              <p className="text-sm text-gray-500">
                Click &quot;Play a sample board&quot; to try the demo
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Demo Modal */}
        <Dialog open={showDemo} onOpenChange={setShowDemo}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Memory Match Demo</DialogTitle>
              <DialogClose onClose={() => setShowDemo(false)} />
            </DialogHeader>

            <div className="space-y-6">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-ink mb-2">
                  Find the matching pairs!
                </h4>
                <p className="text-sm text-gray-600">
                  Click on cards to flip them and find matches
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {sampleCards.map((card) => (
                  <motion.button
                    key={card.id}
                    className={`aspect-square rounded-lg flex items-center justify-center transition-all duration-300 ${
                      flippedCards.includes(card.id) || matchedCards.includes(card.id)
                        ? 'bg-primary text-white'
                        : 'bg-background-soft hover:bg-primary/10'
                    }`}
                    onClick={() => handleCardClick(card.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={matchedCards.includes(card.id)}
                  >
                    {(flippedCards.includes(card.id) || matchedCards.includes(card.id)) && (
                      <card.icon className="w-6 h-6" />
                    )}
                  </motion.button>
                ))}
              </div>

              <div className="text-center">
                <div className="text-sm text-gray-600 mb-4">
                  Matched: {matchedCards.length / 2} / 3 pairs
                </div>
                
                {matchedCards.length === 6 && (
                  <motion.div
                    className="text-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  >
                    <div className="text-2xl font-bold text-primary mb-2">
                      🎉 Perfect Match!
                    </div>
                    <p className="text-sm text-gray-600">
                      Great job! Save this recap to your family&apos;s Yesterday.
                    </p>
                  </motion.div>
                )}
              </div>

              <div className="flex gap-3">
                <Button
                  variant="secondary"
                  className="flex-1"
                  onClick={() => {
                    setFlippedCards([]);
                    setMatchedCards([]);
                  }}
                >
                  Reset
                </Button>
                <Button
                  variant="primary"
                  className="flex-1"
                  onClick={() => setShowDemo(false)}
                >
                  Close Demo
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
