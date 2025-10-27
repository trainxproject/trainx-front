import { GrStatusGood } from "react-icons/gr";

const SubscriptionsView = () => {
    return(
        <div className="w-4xl h-auto pb-12">
        <div className="">
            <div className="flex flex-col">
                <h2 className="font-semibold text-2xl">Planes de suscripción</h2>
                <p className="font-light text-lg text-(--muted-foreground) mt-3">Elige el plan que mejor se adapte a tu rutina de entrenamiento</p>
            </div>
            <div className="flex justify-around items-start mt-8">
                <div className="flex flex-col bg-(--secondary) border-[1px] border p-6 rounded-xl hover:border-(--primary) w-sm">
                    <h3 className="text-xl font-bold">Plan 3 días</h3>
                    <div className="flex justify-baseline items-center p-2">
                        <h2 className="font-bold text-3xl text-(--primary)">$29.99</h2>
                        <p className="ml-2">/mes</p>
                    </div>
                        <div className="mt-6">
                        <div className="flex justify-baseline items-cente m-2">
                        <GrStatusGood color="orange" className="bg-(--primary)/20 rounded-lg"/>
                        <p className="ml-2 font-light text-(--card-foreground)">Acceso 3 días a la semana</p>
                    </div>
                    <div className="flex justify-baseline items-center m-2">
                        <GrStatusGood color="orange" className="bg-(--primary)/20 rounded-lg"/>
                        <p className="ml-2 font-light text-(--card-foreground)">Todas las clases grupales</p>
                    </div>
                    <div className="flex justify-baseline items-center m-2">
                        <GrStatusGood color="orange" className="bg-(--primary)/20 rounded-lg"/>
                        <p className="ml-2 font-light text-(--card-foreground)">Uso de instalaciones</p>
                    </div>
                    <div className="flex justify-baseline items-center m-2">
                        <GrStatusGood color="orange" className="bg-(--primary)/20 rounded-lg"/>
                        <p className="ml-2 font-light text-(--card-foreground)">Asesoría inicial</p>
                    </div>
                    <div className="flex justify-baseline items-center m-2">
                        <GrStatusGood color="orange" className="bg-(--primary)/20 rounded-lg"/>
                        <p className="ml-2 font-light text-(--card-foreground)">Rutinas personalizadas (chatbot)</p>
                    </div>
                        </div>
                    <button className="bg-(--primary)/80 hover:bg-(--primary) px-2 py-2 mt-8 rounded-xl text-black font-semibold hover:shadow-2xl hover:shadow-(--muted-foreground)">
                        Seleccionar plan
                    </button>
                </div>

                <div className="flex flex-col bg-(--secondary) border-[1px] border p-6 rounded-xl hover:border-(--primary) w-sm">
                    <div className="flex justify-center items-center bg-(--primary) w-30 rounded-lg my-4">
                        <p className="text-black text-sm font">Más popular</p>
                    </div>
                    <h3 className="text-xl font-bold">Plan 5 días</h3>
                    <div className="flex justify-baseline items-center p-2">
                        <h2 className="font-bold text-3xl text-(--primary)">$44.99</h2>
                        <p className="ml-2 font-light text-(--card-foreground)">/mes</p>
                    </div>
                    <div className="mt-6">
                    <div className="flex justify-baseline items-center m-2">
                        <GrStatusGood color="orange" className="bg-(--primary)/20 rounded-lg"/>
                        <p className="ml-2 font-light text-(--card-foreground)">Acceso 5 días a la semana</p>
                    </div>
                    <div className="flex justify-baseline items-center m-2">
                        <GrStatusGood color="orange" className="bg-(--primary)/20 rounded-lg"/>
                        <p className="ml-2 font-light text-(--card-foreground)">Todas las clases grupales</p>
                    </div>
                    <div className="flex justify-baseline items-center m-2">
                        <GrStatusGood color="orange" className="bg-(--primary)/20 rounded-lg"/>
                        <p className="ml-2 font-light text-(--card-foreground)">Uso de instalaciones</p>
                    </div>
                    <div className="flex justify-baseline items-center m-2">
                        <GrStatusGood color="orange" className="bg-(--primary)/20 rounded-lg"/>
                        <p className="ml-2 font-light text-(--card-foreground)">Asesoría inicial</p>
                    </div>
                    <div className="flex justify-baseline items-center m-2">
                        <GrStatusGood color="orange" className="bg-(--primary)/20 rounded-lg"/>
                        <p className="ml-2 font-light text-(--card-foreground)">Rutinas personalizadas (chatbot)</p>
                    </div>
                    </div>
                    <button className="bg-(--primary)/80 hover:bg-(--primary) px-2 py-2 mt-8 rounded-xl text-black font-semibold hover:shadow-2xl hover:shadow-(--muted-foreground)">
                        Seleccionar plan
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default SubscriptionsView