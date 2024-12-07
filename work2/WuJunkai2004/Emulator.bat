@echo off

set "emulator=D:\Program Files\DevEco Studio\tools\emulator\Emulator.exe"

set "hvd=Huawei_Phone"
set "emu_path=C:\Users\wujun\AppData\Local\Huawei\Emulator\deployed"
set "image=C:\Users\wujun\AppData\Local\Huawei\Sdk"

"%emulator%" -hvd %hvd% -path %emu_path% -t trace_96716_commandPipe -imageRoot %image%