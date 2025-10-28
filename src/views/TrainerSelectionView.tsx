interface Trainer {
    id: string;
    name: string;
    specialty: string;
    experience: string;
    rating: number;
    image: string;
    certifications: string[];
  }
  
  interface TrainerSelectionProps {
    selectedTrainer?: string | null;
    onSelectTrainer: (trainerId: string) => void;
  }
  
  const trainers: Trainer[] = [
    {
      id: '1',
      name: 'Juan Pérez',
      specialty: 'CrossFit & Fuerza',
      experience: '8 años',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1758875568756-37a9c5c1a4f2?w=800',
      certifications: ['Certificado CrossFit L1', 'Nutrición Deportiva'],
    },
    {
      id: '2',
      name: 'María López',
      specialty: 'Yoga & Pilates',
      experience: '6 años',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1602827114685-efbb2717da9f?w=800',
      certifications: ['Yoga Alliance RYT 500', 'Pilates Mat'],
    },
    {
      id: '3',
      name: 'Carlos Ruiz',
      specialty: 'Spinning & Cardio',
      experience: '5 años',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1630415187908-39d6d209b15c?w=800',
      certifications: ['Indoor Cycling Instructor', 'HIIT Coach'],
    },
    {
      id: '4',
      name: 'Ana García',
      specialty: 'Tonificación & Pérdida de Peso',
      experience: '7 años',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1756115484694-009466dbaa67?w=800',
      certifications: ['Personal Trainer NSCA', 'Nutrición Fitness'],
    },
  ];
  
  const TrainerSelection = ({ selectedTrainer, onSelectTrainer }: TrainerSelectionProps) => {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Elige tu Entrenador</h2>
          <p className="text-sm text-gray-500">
            Selecciona un entrenador especializado según tus objetivos
          </p>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className={`overflow-hidden rounded-xl border-2 transition-all duration-200 ${
                selectedTrainer === trainer.id
                  ? 'border-orange-500'
                  : 'border-gray-300 hover:border-orange-400'
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover"
                />
                {selectedTrainer === trainer.id && (
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center bg-orange-500 text-black text-lg font-bold">
                    ✓
                  </div>
                )}
              </div>
  
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1">{trainer.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{trainer.specialty}</p>
  
                <div className="flex items-center gap-3 mb-3 text-sm">
                  <span className="flex items-center gap-1">⭐ {trainer.rating}</span>
                  <span className="flex items-center gap-1 text-gray-500">🏅 {trainer.experience}</span>
                </div>
  
                <div className="flex flex-wrap gap-1 mb-4">
                  {trainer.certifications.map((cert, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 text-[11px] px-2 py-1 rounded-full"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
  
                <button
                  onClick={() => onSelectTrainer(trainer.id)}
                  disabled={selectedTrainer === trainer.id}
                  className={`w-full py-2 rounded-md font-semibold transition-colors duration-200 ${
                    selectedTrainer === trainer.id
                      ? 'bg-gray-800 text-gray-400 cursor-not-allowed'
                      : 'bg-orange-500 text-black hover:bg-orange-400'
                  }`}
                >
                  {selectedTrainer === trainer.id ? 'Tu Entrenador' : 'Seleccionar'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  

  export default TrainerSelection;