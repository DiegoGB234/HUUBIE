import { X } from 'lucide-react';
import type React from 'react';

interface props {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    formProperties: { [key: string]: string };
    title: String;
}

function FormEre({ isOpen, setIsOpen, formProperties, title }: props) {
    const event = () => {
        setIsOpen(!isOpen);
    };

    const contenForm = Object.keys(formProperties);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Formulario enviado');
    };

    if (!isOpen) return null;

    return (
        <>
            <div 
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-300"
                onClick={event}
            />
            
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div 
                    className={`
                        relative w-full max-w-2xl max-h-[90vh] overflow-y-auto
                        rounded-2xl border border-gray-600/30
                        transform transition-all duration-500 ease-out
                        ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
                    `}
                    style={{ backgroundColor: "#29354A" }}
                >
                    <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-gray-600/30 backdrop-blur-sm bg-[#29354A]/95">
                        <h2 className="text-2xl font-bold text-white bg-gradient-to-r from-white to-blue-200 bg-clip-text">
                            {title}
                        </h2>
                        <button
                            className="group relative p-2 rounded-xl transition-all duration-300 hover:bg-red-500/20 active:scale-90"
                            onClick={event}
                        >
                            <X 
                                size={28} 
                                className="text-white transition-all duration-300 group-hover:text-red-400 group-hover:rotate-90" 
                            />
                            <div className="absolute inset-0 rounded-xl bg-red-500/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        </button>
                    </div>

                    <div className="p-6">
                        <form id="formulario" onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {contenForm.map((fieldKey, index) => (
                                    <div 
                                        key={fieldKey}
                                        className="group relative"
                                        style={{
                                            animationDelay: `${index * 100}ms`
                                        }}
                                    >
                                        <label 
                                            htmlFor={fieldKey} 
                                            className="block text-sm font-medium text-blue-200 mb-2 transition-colors duration-200 group-focus-within:text-blue-300"
                                        >
                                            {formProperties[fieldKey]}
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder={`Ingresa ${formProperties[fieldKey].toLowerCase()}`}
                                                id={fieldKey}
                                                className="
                                                    w-full p-4 rounded-xl border-2 transition-all duration-300
                                                    bg-[#2B3A4F] border-[#3A415D] text-white placeholder-gray-400
                                                    focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none
                                                    hover:border-gray-500
                                                "
                                            />
                                            <div className="absolute inset-0 rounded-xl bg-blue-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 rounded-full"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="relative py-4">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
                                </div>
                                <div className="relative flex justify-center">
                                    <div className="px-4 bg-[#29354A]">
                                        <div className="w-8 h-1 bg-blue-500 rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button
                                    type="button"
                                    onClick={event}
                                    className="
                                        flex-1 px-6 py-3 rounded-xl font-semibold text-white
                                        bg-gray-700 hover:bg-gray-800
                                        transition-all duration-300 transform hover:scale-105 active:scale-95
                                        border border-gray-500 hover:border-gray-400
                                    "
                                >
                                    Cancelar
                                </button>
                                
                                <button
                                    type="submit"
                                    className="
                                        flex-1 px-6 py-4 rounded-xl font-bold text-white uppercase tracking-wide
                                        bg-blue-600 hover:bg-blue-700
                                        transition-all duration-300 transform hover:scale-105 active:scale-95
                                        border border-blue-500 hover:border-blue-400
                                        relative overflow-hidden group
                                    "
                                >
                                    <span className="relative z-10">Guardar</span>
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="h-1 bg-blue-600 rounded-b-2xl"></div>
                </div>
            </div>
        </>
    );
}

export default FormEre;
