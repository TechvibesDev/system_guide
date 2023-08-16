export class ListDS {
    id: number | undefined;
    name: string | undefined;
    Reasons: string | undefined;
    steps: StepDS[] | undefined;
}
export class StepDS {
    id: number | undefined;
    check: string | undefined;
    process: string | undefined;
}
export const List = [
    {
        id: 1,
        name: "Keys not working on keyboard",
        Reasons: "A common misconception of this keyboard issue is that it is caused by a virus as the user loses control over the keys. Most causes for keyboard failure involve dust and rust buildup and accumulating over the years. Or it could be from a liquid spill or leakage that many computer users might not even be aware of.",
        steps: [
            {
                id: 1,
                check: "Restart the laptop",
                process:
                    "As a general rule, the first thing you should try when you encounter a computer problem that's serious enough to keep you from getting work done is to restart the computer — turn it off and then back on again. Doing that flushes out the computer's memory and restarts all your programs, drivers, and utilities, and that can be enough to restore your laptop to full operation.",
            },
            {
                id: 2,
                check: "Clean the keyboard",
                process:
                    "Sometimes, what at first seems like a serious hardware error is really a fairly mundane problem. If only some of your keys aren't working properly, for example, there could be dirt and debris under the keys, keeping them from working properly. To check if it's simply a matter of dirt under the keys, start with a small brush or microfiber cloth and wipe the keys, trying to extract any debris that might have gotten caught under or between the keycaps. You should also dab a cloth with rubbing alcohol and gently but thoroughly wipe away any dried liquids or stuck-on dirt. For the most thorough cleaning, blast a can of compressed air into the gaps between keys.",
            },
            {
                id: 3,
                check: "Check your keyboard drivers and settings",
                process: [
                    {
                        id: 1,
                        step: "In the Start search box, type 'Device manager' and click it when you see it appear in the search results",
                    },
                    {
                        id: 2,
                        step: "Click the arrow to the left of Keyboard to expand the section.",
                    },
                    {
                        id: 3,
                        step: 'Right-click your keyboard in the device list and choose Uninstall device.'
                    },
                    {
                        id: 4,
                        step: 'Reboot your laptop, and Windows will automatically identify the laptop keyboard and install the latest driver for it.Reboot your laptop, and Windows will automatically identify the laptop keyboard and install the latest driver for it. Reboot your laptop, and Windows will automatically identify the laptop keyboard and install the latest driver for it. Reboot your laptop, and Windows will automatically identify the laptop keyboard and install the latest driver for it. '
                    }
                ],
            },
        ],
    },
    {
        id: 2,
        name: "Video card faults",
        Reasons: "Video cards can fail for so many different reasons. Not properly installing the component in the computer can lead to video card failure, but more commonly, dust and lint are the culprits. Another thing that can cause video card failure is too much overclocking.",
        steps: [
            {
                id: 1,
                check: "Install the latest chipset drivers for your motherboard",
                process: [
                    {
                        id: 1,
                        step: [
                            {
                                id: 1,
                                stp: " To start, right-click on 'My Computer' and select 'Properties.'",
                                img: "https://images.wondershare.com/recoverit/article/2020/05/video-card-failure-1.jpg",
                            },
                            {
                                id: 2,
                                stp: "Go to the 'Hardware' Tab and choose 'Device Manager.'",
                            },
                            {
                                id: 3,
                                stp: "Now open 'IDE ATA/ATAPI controllers,' and you will see the manufacturer's name, e.g., VIA, Intel, NVidia, etc.",
                                img: "https://images.wondershare.com/recoverit/article/2020/05/video-card-failure-2.jpg",
                            },
                            {
                                id: 4,
                                stp: "Now that you have the manufacturer's name, in this case, Intel, go to their site and download the latest motherboard drivers for the chipset",
                            },
                        ]
                    }
                ]
            },
            {
                id: 2,
                check: "Update your display drivers",
                note: "Sometimes, your chipset drivers may be OK, but your video card is running on old and outdated drivers, which may cause the video card to fail. Here is how you update drivers on your computer.",
                step: [
                    {
                        id: 1,
                        stp: 'Log into your computer as an administrator. Now click on the "Windows" icon button and the "R" button simultaneously.',
                    },
                    {
                        id: 2,
                        stp: 'Now type in "devmgmt. MSC," followed by the "Enter" button.',
                        img: 'https://images.wondershare.com/recoverit/article/2020/05/video-card-failure-3.jpg'
                    },
                    {
                        id: 3,
                        stp: 'Now get to "Display adapters," right-click on the graphics card, and then choose "Properties."',
                        img: 'https://images.wondershare.com/recoverit/article/2020/05/video-card-failure-4.jpg',
                    },
                    {
                        id: 4,
                        stp: 'Navigate to the "Driver" tab, and then click on "Update Driver."',
                        img: 'https://images.wondershare.com/recoverit/article/2020/05/video-card-failure-5.jpg',
                    },
                    {
                        id: 5,
                        stp: 'Proceed and click on "Search automatically for updated driver software."',
                        img: 'https://images.wondershare.com/recoverit/article/2020/05/video-card-failure-6.jpg',
                    },
                    {
                        id: 6,
                        stp: ' Now follow the onscreen prompts to update the display drivers for your video card.'
                    }
                ]
            },
            {
                id: 3,
                Reasons: "Physically check your computer",
                note: "Sometimes, the problem may be a bad connection, dirty points, or poor seating. It requires you to check the hardware seating and connections on your computer physically.",
                step: [
                    {
                        id: 1,
                        stp: "Remove the video card and then clean it. This will remove all dust that may be covering the card and its connections."
                    },
                    {
                        id: 2,
                        stp: "Once you have cleaned the card, place it back in its slot and ensure it is firmly secured."
                    },
                    {
                        id: 3,
                        stp: "Remove the RAM cards and similarly clean them as you did the video card."
                    },
                    {
                        id: 4,
                        stp: "Return the RAM and ensure they are firmly in place."
                    },
                    {
                        id: 5,
                        stp: "Restart the computer and see how the display will behave when playing video or games."
                    },
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Overheating",
        Reasons: "Perhaps most importantly one of the factors that shorten the life of computers is the warm-up problem. Cheap and unconsciously selected computer cases, cooling elements that are not installed according to the rules and overloading of computers is associated with warming that may lead to temporary or permanent damage",
        steps: [
            {
                id: 1,
                check: "Check that the fans are working",
                note: "Internal PC components generate a lot of heat, especially when you use your computer for extended periods of time. This isn’t a problem if the fans inside your machine are working properly to keep temperatures under control.",
                process: [
                    {
                        id: 1,
                        stp: "When turning on your PC you should hear the fans whirring into motion",
                    },
                    {
                        id: 2,
                        stp: "Place your hand near the computer’s fan grille and feel for vibration",
                    },
                    {
                        id: 3,
                        stp: "Confirm the fans are running by using a flashlight to look for movement through the fan grille",
                    },
                ]
            },
            {
                id: 2,
                check: "Replace CPU Thermal Paste",
                note: "Every laptop has a CPU and it uses a thermal paste to pass on the heat generated by the CPU to the cooling solution (heat sink and cooling fans). Sometimes, if the laptop manufacturer uses low-quality thermal paste, it can wear off within a couple of years. It could wear off even faster if you use the laptop in hot and humid conditions.",
            },
            {
                id: 3,
                check: "Use A Laptop Cooling Pad",
                name: "Even if your laptop has an internal CPU cooling fan, buying an external cooling pad for your laptop might help remove excess heat while charging and performing heavy tasks. A laptop cooling pad provides additional cooling support to help the laptop run as intended. That said, you should keep in mind that the native cooling mechanism varies per device, so you will need to make sure that the cooling pad that you invest in supports your laptop.",
                process: [
                    {
                        id: 1,
                        img: "https://onsitego.com/blog/wp-content/uploads/2019/07/Laptop-Cooling-Pad-Fans-1024x533.jpg"
                    }
                ]
            },
            {
                id: 4,
                check: "Clean and dust your computer",
                note: "Over time, dirt and dust will accumulate in your computer’s ventilation ducts, clogging up vital components, reducing airflow, and contributing to overheating. ",
                process: [
                    {
                        id: 1,
                        stp: "Completely shut down and unplug all your PC’s cords and cables."
                    },
                    {
                        id: 2,
                        stp: "Place your computer on a clean, flat, and well lit workspace."
                    },
                    {
                        id: 3,
                        stp: "Carefully remove its casing"
                    },
                    {
                        id: 4,
                        stp: "Using the can of compressed air, clear away dust and debris from the fans, ducts, and other components."
                    },
                    {
                        id: 5,
                        stp: "If blockages remain lodged in tight spaces, use cotton swabs to gently clean them."
                    },
                ]
            }
        ]
    },
    {
        id: 4,
        name: "Dysfunctional USB Port",
        Reasons: "If your USB port stops working, it’s not necessary that it’s broken. Below are some solutions that can fix this issue",
        steps: [
            {
                id: 1,
                check: "Uninstall USB port driver",
                note: "Uninstalling the driver of the USB port will force Windows to reinstall it when you will restart the PC. This may fix the problem. Here is how to do it",
                process: [
                    {
                        id: 1,
                        stp: "Press Windows + R keys and enter devmgmt.msc in the Run dialog to open the Device Manager."
                    },
                    {
                        id: 2,
                        stp: "Here, expand Universal Serial Bus controllers option."
                    },
                    {
                        id: 3,
                        stp: "Now right-click the entry USB Host Controller and then click on Uninstall."
                    },
                    {
                        id: 4,
                        stp: "Repeat this for all entries with USB Host Controller to uninstall drivers for all the USB ports."
                    },
                    {
                        id: 5,
                        stp: "Once deleted, restart the PC and Windows will automatically reinstall the drivers and fix any driver issues."
                    },
                ]
            },
            {
                id: 2,
                check: "Method 3: Disable USB sThis option should be kept enabled if you want to save battery power. If it doesn’t fix the USB port issue, then enable it again.elective suspend",
                note: "USB Selective Suspend is a Windows power saving feature that suspends unused or idle USB ports to conserve power. Sometimes it could stop a USB port from working",
                conclusion: "This option should be kept enabled if you want to save battery power. If it doesn’t fix the USB port issue, then enable it again.",
                process: [
                    {
                        id: 1,
                        stp: "Press Windows + R keys and type powercfg.cpl in the Run dialog to open Windows Power options.",
                    },
                    {
                        id: 2,
                        stp: "Here click on Change plan settings next to your current plan and then click on Change advanced power settings.",
                    },
                    {
                        id: 3,
                        stp: "Now, expand USB settings and disable USB selective suspend setting.",
                    },
                    {
                        id: 4,
                        stp: "Restart the PC to see if it fixes the USB port issue.",
                        img: "https://assets.hongkiat.com/uploads/pc-hardware-problems-solutions/02-Common-PC-Hardware-Problems-disable-USB-Suspend.jpg",
                    },
                ]
            },
        ]
    },
    {
        id: 5,
        name: "PC not using a portion of RAM",
        Reasons: "sometimes people run into an issue where Windows won't use full RAM. This can happen for a number of reasons. If your Windows has a 32-bit architecture, you will be limited in the amount of RAM that you can use. Outdated BIOS, inbuilt GPU, turn-on ram virtualization, and damaged RAM are some of the other possible contributors.",
        steps: [
            {
                id: 1,
                check: "Uncheck Maximum Memory",
                note: "",
                process: [
                    {
                        id: 1,
                        spt: "Right-click the Windows icon from the bottom left",
                    },
                    {
                        id: 2,
                        spt: "Click Run and type MSConfig then click OK",
                    },
                    {
                        id: 3,
                        spt: "Go to Boot options and click Advanced Options",
                    },
                    {
                        id: 4,
                        spt: "Uncheck the Maximum Memory and click OK",
                    },
                ]
            },
            {
                id: 2,
                check: "Turn off Virtual Memory",
                note: "",
                process: [
                    {
                        id: 1,
                        stp: "To turn off virtual memory, click on the Start Menu and search for Advanced System Settings",
                    },
                    {
                        id: 2,
                        stp: "Open System Settings, under advanced click Settings",
                    },
                    {
                        id: 3,
                        stp: "Click Advanced from the top and press Change",
                    },
                    {
                        id: 4,
                        stp: "Untick Automatically Manage Paging File Size For All Drives",
                    },
                    {
                        id: 5,
                        stp: "Select No Paging File then click OK",
                    },
                ]
            },
            {
                id: 2,
                check: "Update BIOS",
                note: "",
                process: [
                    {
                        id: 1,
                        stp: "Go to the official website of your BIOS manufacturer",
                    },
                    {
                        id: 2,
                        stp: "Find the Driver download page",
                    },
                    {
                        id: 3,
                        stp: "Type System Information in the Start menu and open it",
                    },
                    {
                        id: 4,
                        stp: "Compare the BIOS Version/Date in the System Information with the version number specified on the official website.",
                    },
                    {
                        id: 5,
                        stp: "Begin the downloading.",
                    },
                    {
                        id: 7,
                        stp: "Once the download is complete, then double-click on the downloaded file.",
                    },
                    {
                        id: 8,
                        stp: "Upon opening the file, the system will warn you that updating the BIOS process will reboot your system. Click on the OK button.",
                    },
                    {
                        id: 9,
                        stp: "Next, the system will show you another information dialog, which indicates the current version of BIOS and the version you are installing. Click on the OK button again.",
                    },
                    {
                        id: 10,
                        stp: "The system will begin the BIOS updating process",
                    },
                    {
                        id: 11,
                        stp: "Once the progress bar goes to 100%, you’ll see a black screen followed by the following screen.",
                    },
                    {
                        id: 12,
                        stp: "After the updating procedure, the system will reboot normally.",
                    },
                    {
                        id: 13,
                        stp: "Once the system has successfully rebooted, you can confirm that the latest BIOS version is installed.",
                    },
                ]
            },
            {
                id: 2,
                check: "Free Paging files of the C drive",
                note: "Sometimes, the paging files in the Windows drive may cause this problem.",
                process: [
                    {
                        id: 1,
                        stp: "Press Windows key+R together.",
                    },
                    {
                        id: 2,
                        stp: "Simply, type this command and then hit Enter to open System Properties.",
                        img: "https://thegeekpage.com/wp-content/uploads/2020/03/Press-Win-R-to-open-Run-Type-sysdm.cpl-and-hit-Eter-1.png"
                    },
                    {
                        id: 3,
                        stp: "At first, go to the “Advanced” tab.",
                    },
                    {
                        id: 4,
                        stp: "Here you need to click on the “Settings“.",
                        img: "https://thegeekpage.com/wp-content/uploads/2020/07/advanced-settings.jpg"
                    },
                    {
                        id: 5,
                        stp: "When you see that the Performance Options panel has appeared, go to the “Advanced” tab.",
                    },
                    {
                        id: 6,
                        stp: "In the ‘Virtual memory‘ panel, click on “Change“.",
                        img: "https://thegeekpage.com/wp-content/uploads/2020/07/advanced-change.jpg"
                    },
                    {
                        id: 7,
                        stp: "Then, uncheck the box beside the “Automatically manage paging file size for all drives” option.",
                    },
                    {
                        id: 8,
                        stp: "Now, click on the drive where Windows is installed. Generally, it is the “C:” drive. You have to select the “C:” drive.",
                        img: "https://thegeekpage.com/wp-content/uploads/2020/07/c-drive-select.jpg"
                    },
                    {
                        id: 9,
                        stp: "Then, click on the “No paging file” option.",
                    },
                    {
                        id: 10,
                        stp: "  After that, click on “Set” to set it.",
                        img: "https://thegeekpage.com/wp-content/uploads/2020/07/no-paging-file-set.jpg"
                    },
                    {
                        id: 11,
                        stp: "If there is a prompt, simply click on “Yes” to confirm the change.",
                        img: "https://thegeekpage.com/wp-content/uploads/2020/04/sytem-props-yes-mesasge.png"
                    },
                    {
                        id: 12,
                        stp: "Finally, click on “OK” to modify the settings.",
                        img: "https://thegeekpage.com/wp-content/uploads/2020/07/ok.jpg"
                    },
                    {
                        id: 13,
                        stp: "After doing these, you have to click on “Apply” and click on “OK” to save it.",
                        img: "https://thegeekpage.com/wp-content/uploads/2020/07/apply-ok-1.jpg"
                    },
                    {
                        id: 14,
                        stp: "Close all the windows. After that, restart your computer."
                    },
                ]
            },
            {
                id: 2,
                check: "Change the RAM slots",
                note: "Try altering the RAM slots on your motherboard. this may also help troubleshoot the problem",
                process: [
                    {
                        id: 1,
                        stp: "Remove the cover from your machine. You can see the rectangular green RAM sticks attached to the motherboard pins."
                    },
                    {
                        id: 2,
                        stp: "Toggle the clips at the side of the slots. Detach all the RAM sticks from all the slots."
                    },
                    {
                        id: 3,
                        stp: "Clean the dust of the RAM sticks and RAM slots on your motherboard."
                    },
                    {
                        id: 4,
                        stp: "If all the RAM sticks and slots are working, attach the RAM sticks to different slots and then toggle the clips to attach them properly."
                    },
                    {
                        id: 5,
                        stp: "Restart your computer."
                    },
                ]
            }
        ]
    },
    {
        id: 6,
        name: "Blue Screen of Death",
        Reasons: "The dreaded Blue Screen of Death (BSOD) can occur due to both software and hardware problems, but usually, it’s a hardware problem. Whatever the cause, BSOD requires immediate attention as it’s a sign of a big problem.",
        img: "https://assets.hongkiat.com/uploads/pc-hardware-problems-solutions/BSOD.jpg",
        steps: [
            {
                id: 1,
                check: "Uncheck Maximum Memory",
                note: "A corrupt driver may be the cause of BSOD. To find that out, use the following steps",
                process: [
                    {
                        id: 1,
                        stp: "Open Device Manager by typing devmgmt.msc in the Run."
                    },
                    {
                        id: 1,
                        stp: "Here expand each menu and look for a yellow triangle icon next to each driver."
                    },
                    {
                        id: 1,
                        stp: "If you find any, right-click on it and select Update Driver Software to update its driver.",
                        img: "https://assets.hongkiat.com/uploads/pc-hardware-problems-solutions/05-Common-PC-Hardware-Problems-Update-driver.jpg"
                    },
                ]
            }
        ]
    },
    {
        id: 8,
        name: "Mouse Not Working",
        Reasons: "Has your mouse stopped working and you can't figure out why? Here's how to fix your mouse problems in Windows 10.",
        steps: [
            {
                id: 1,
                check: "Reinstall or Update Mouse Driver",
                note: "It could be that you have a faulty or outdated driver because of which your mouse is acting up. The first thing here that you can do is that you can uninstall and then reinstall the driver for your mouse",
                img: "https://cdn.wethegeek.com/wp-content/uploads/2020/09/Reinstall-Mouse-Driver.jpg",
                process: [
                    {
                        id: 1,
                        stp: "Press Windows + R keys"
                    },
                    {
                        id: 2,
                        stp: "When the run dialog box opens, type devmgmt.msc and then press enter"
                    },
                    {
                        id: 3,
                        stp: "Scroll down till you see Mice and other pointing devices. Click on it and expand it so that you can see your model of your mouse"
                    },
                    {
                        id: 4,
                        stp: "Right-Click on the device model and click on Properties"
                    },
                    {
                        id: 5,
                        stp: "Click on the Driver tab and then click on Uninstall Device and press OK. You might be prompted to restart your computer"
                    },
                    {
                        id: 6,
                        stp: "Now, scan for hardware changes"
                    },
                    {
                        id: 7,
                        stp: "Windows will now help you reinstall the missing driver for your mouse"
                    },
                ]
            },
            {
                id: 2,
                check: "Disable Enhanced Pointer Precision",
                note: "Have you ever been bogged by a jumping cursor, frozen cursor or even a disappearing cursor? Such Windows 10 mouse problems can be fixed by disabling enhanced pointer precision",
                img: "https://cdn.wethegeek.com/wp-content/uploads/2020/09/Precision.jpg",
                process: [
                    {
                        id: 1,
                        stp: "Press Windows+X keys and open Settings"
                    },
                    {
                        id: 2,
                        stp: "Click on Devices"
                    },
                    {
                        id: 3,
                        stp: "Choose Mouse from the left-hand pane"
                    },
                    {
                        id: 4,
                        stp: "Under Related settings click on Additional mouse options"
                    },
                    {
                        id: 5,
                        stp: "You will now reach another window that says Mouse Properties"
                    },
                    {
                        id: 6,
                        stp: "Click on the Pointers Options and then under Motion uncheck the Enhance pointer precision option"
                    },
                ]
            },
            {
                id: 1,
                check: "Basic Checkup",
                note: "Much before you dive into any advance steps or settings for troubleshooting Windows 10 mouse problems, here are some basic checks that might eliminate possibilities of some other defects",
                process: [
                    {
                        id: 1,
                        stp: "Unplug and replug the mouse and also make sure that the mouse is properly and firmly plugged into the port."
                    },
                    {
                        id: 2,
                        stp: "Check if the mouse is connected to the right port."
                    },
                    {
                        id: 3,
                        stp: "Check for any physical damages in the USB port as well as the connecting wires for your mouse."
                    },
                    {
                        id: 4,
                        stp: "Check that all the USB ports are working and not defective."
                    },
                    {
                        id: 5,
                        stp: "See whether the mouse is just not working on your PC or other computers as well."
                    },
                ]
            }
        ]
    },
];