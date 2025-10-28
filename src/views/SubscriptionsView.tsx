import { GrStatusGood } from "react-icons/gr";
import { plans } from "../mocks/subscriptions"


const SubscriptionsView: React.FC = () => {
    return (
      <div className="w-4xl h-auto pb-12">
        <div>
          <div className="flex flex-col">
            <h2 className="font-semibold text-2xl">Planes de suscripción</h2>
            <p className="font-light text-lg text-(--muted-foreground) mt-3">
              Elige el plan que mejor se adapte a tu rutina de entrenamiento
            </p>
          </div>
  
          <div className="flex justify-around items-start mt-8">
            {plans.map((plan, index) => (
              <div key={index} className="flex flex-col bg-(--secondary) border-[1px] border p-6 rounded-xl hover:border-(--primary) w-sm">
                
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="flex justify-baseline items-center p-2">
                  <h2 className="font-bold text-3xl text-(--primary)">
                    ${plan.price}
                  </h2>
                  <p className="ml-2">/mes</p>
                </div>
  
                <div className="mt-6">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex justify-baseline items-center m-2">
                      <GrStatusGood color="orange" className="bg-(--primary)/20 rounded-lg"/>
                      <p className="ml-2 font-light text-(--card-foreground)">{feature}</p>
                    </div>
                  ))}
                </div>
  
                <button className="bg-(--primary)/80 hover:bg-(--primary) px-2 py-2 mt-8 rounded-xl text-black font-semibold hover:shadow-2xl hover:shadow-(--muted-foreground)">
                  Seleccionar plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default SubscriptionsView