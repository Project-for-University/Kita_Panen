import { AppSidebar } from "@/components/dashboard/app-sidebar"


import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"


export default function DashboardLayout({ children }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                {children}
            </SidebarInset>
        </SidebarProvider>
    );
}