import { TrendingUp } from "lucide-react";

export function Dashboard() {
    return(
        <div className="min-h-screen bg-dark p-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-primary flex items-center gap-2">
                        <TrendingUp className="text-primary"/>
                        Painel Financeiro
                    </h1>
                </div>
            </div>
        </div>
    )
}