import * as Config from "settings/config";

export let MemoryVersion = Config.MEMORY_VERSION;

export function setMemVersion(value: number): void {
  MemoryVersion = value;
}

export function getMemVersion(): number {
  return MemoryVersion;
}

export const enum CreepRoles {
  ROLE_UNASSIGNED = 0,
  ROLE_ALL,
  ROLE_BUILDER,
  ROLE_MINER,
  ROLE_MINEHAULER,
  ROLE_HEALER,
  ROLE_FIGHTER,
  ROLE_RANGER,
  ROLE_CLAIMER,
  ROLE_REMOTEMINER,
  ROLE_REMOTEMINEHAULER,
  ROLE_CUSTOMCONTROL,
  ROLE_UPGRADER,
  ROLE_UPGRADETRANSPORT
}

export function roleToString(job: CreepRoles): string {
  switch (job) {
    case CreepRoles.ROLE_BUILDER:
      return "ROLE_BUILDER";
    case CreepRoles.ROLE_MINER:
      return "ROLE_MINER";
    case CreepRoles.ROLE_MINEHAULER:
      return "ROLE_MINEHAULER";
    case CreepRoles.ROLE_HEALER:
      return "ROLE_HEALER";
    case CreepRoles.ROLE_FIGHTER:
      return "ROLE_FIGHTER";
    case CreepRoles.ROLE_RANGER:
      return "ROLE_RANGER";
    case CreepRoles.ROLE_CLAIMER:
      return "ROLE_CLAIMER";
    case CreepRoles.ROLE_REMOTEMINER:
      return "ROLE_REMOTEMINER";
    case CreepRoles.ROLE_REMOTEMINEHAULER:
      return "ROLE_REMOTEMINEHAULER";
    case CreepRoles.ROLE_CUSTOMCONTROL:
      return "ROLE_CUSTOMCONTROL";
    default:
      return "unknown role";
  }
}

export interface MyPosition {
  x: number;
  y: number;
}

export interface PositionPlusTarget {
  x: number;
  y: number;
  targetId: string;
}

export interface RoomPositionPlusTarget {
  roomTarget: string;
  x: number;
  y: number;
  targetId: string;
}

export class RoomMemory {
  public roomName: string;
  public energySources: PositionPlusTarget[];
  public spawnText?: string;
  public spawnTextId?: string;
  public minerTasks: MinerTask[];
  public constructor(room: Room) {
    this.roomName = room.name;
  }
}

export interface GameMemory {
  memVersion: number | undefined;
  uuid: number;
  log: any;
  Profiler: Profiler;

  creeps: {
    [name: string]: any;
  };

  flags: {
    [name: string]: any;
  };

  rooms: {
    [name: string]: RoomMemory;
  };

  spawns: {
    [name: string]: any;
  };
}

export interface CreepMemory {
  name?: string;
  role: CreepRoles;
  roleString: string;
  log: boolean;
  assignedMineTaskId?: number;
}

export interface MinerTask {
  taskId: number;
  minerPosition: PositionPlusTarget;
  assignedMinerName?: string;
}

export function cm(creep: Creep): CreepMemory {
  return creep.memory as CreepMemory;
}

export function m(): GameMemory {
  return (Memory as any) as GameMemory;
}

export function l(cmLog: CreepMemory): string {
  return `${cmLog.name}: `;
}
