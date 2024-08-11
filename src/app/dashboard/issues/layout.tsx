import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  
  export default function IussesLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <>
      <Menubar className="flex h-9 items-center space-x-1 border-x-0 bottom-t-0  border-b-neutral-200 dark:border-b-neutral-700 p-1 shadow-sm rounded-none px-2 lg:px-4">
        <MenubarMenu>
          <MenubarTrigger>Projects</MenubarTrigger>
          <MenubarContent>
            <MenubarItem inset>
              WEBUI <MenubarShortcut>Recent</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>View All Project</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Create Project</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Sprints</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value="active-sprints">
              <MenubarRadioItem value="active-sprints">Active Sprints</MenubarRadioItem>
              <MenubarRadioItem value="backlog">Backlog</MenubarRadioItem>
              <MenubarRadioItem value="all">All</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem inset>Add Sprint</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      {children}
  
    </>;
  }